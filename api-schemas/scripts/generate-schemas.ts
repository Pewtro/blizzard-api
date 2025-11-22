#!/usr/bin/env ts-node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
// eslint-disable-next-line depend/ban-dependencies
import { globSync } from 'glob';
import { Project, type Type } from 'ts-morph';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '../..');
const outDirectory = path.resolve(__dirname, '../src/generated');
const schemasIndex = path.resolve(__dirname, '../src/generated/index.ts');

function ensureDirectory(dir: string) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

ensureDirectory(outDirectory);

const project = new Project({ tsConfigFilePath: path.join(repoRoot, 'tsconfig.json') });
const pattern = path.join(repoRoot, 'packages', '**', 'src', '**', '*.ts');
const files = globSync(pattern, { ignore: ['**/node_modules/**', '**/dist/**'] });
const sourceFiles = project.addSourceFilesAtPaths(files);
const checker = project.getTypeChecker();

type GeneratedEntry = { body: string; deps: Set<string> };
const generatedMap = new Map<string, GeneratedEntry>();

function sanitizeIdentifier(name: string) {
  return name.replace(/[^A-Za-z0-9_]/g, '_');
}

function toKebab(name: string) {
  // Convert PascalCase / camelCase / snake_case to kebab-case
  return name
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[^A-Za-z0-9-]/g, '')
    .toLowerCase();
}

function schemaNameFor(symbolName: string) {
  return `${symbolName}Schema`;
}

function refNameForSymbol(symbolName: string) {
  return sanitizeIdentifier(schemaNameFor(symbolName));
}

function generateForType(type: Type | undefined, depth = 0, seen = new Set<string>(), deps?: Set<string>): string {
  if (!type) return 'z.any()';

  const key = type.getText();
  if (seen.has(key) || depth > 12) return 'z.any()';
  seen.add(key);

  if (type.isString()) return 'z.string()';
  if (type.isNumber()) return 'z.number()';
  if (type.isBoolean()) return 'z.boolean()';
  if (type.isAny()) return 'z.any()';
  if (type.isUnknown()) return 'z.unknown()';

  if (type.isStringLiteral()) return `z.literal(${JSON.stringify(type.getLiteralValue() as string)})`;

  const arrayElem = type.getArrayElementType();
  if (arrayElem) return `z.array(${generateForType(arrayElem, depth + 1, new Set(seen), deps)})`;

  if (type.isUnion()) {
    const parts = type.getUnionTypes().map((t) => generateForType(t, depth + 1, new Set(seen), deps));
    return `z.union([${parts.join(', ')}])`;
  }

  const symbol = type.getSymbol();
  if (symbol) {
    const name = symbol.getName();
    if ((name === 'Object' || name === 'Record') && type.getText().startsWith('Record')) {
      return 'z.record(z.string())';
    }

    const genName = refNameForSymbol(name);
    if (deps) deps.add(genName);

    if (!generatedMap.has(genName)) {
      generatedMap.set(genName, { body: `export const ${genName} = z.any();`, deps: new Set() });
      const decls = symbol.getDeclarations();
      const first = decls?.[0];
      if (first) {
        const t = checker.getTypeAtLocation(first);
        if (t && (t.isInterface() || t.isObject() || t.isClass())) {
          const propParts: string[] = [];
          const depSet = new Set<string>();
          for (const p of t.getProperties()) {
            const pname = p.getName();
            const ptype = checker.getTypeOfSymbolAtLocation(p, first);
            const optional = p.isOptional();
            // Special-case _links: many API responses only include a `self` href.
            let pSchema: string;
            if (pname === '_links') {
              const selfProp = ptype.getProperty('self');
              if (selfProp) {
                const selfType = checker.getTypeOfSymbolAtLocation(selfProp, first);
                const selfSchema = generateForType(selfType, depth + 1, new Set(seen), depSet);
                pSchema = `z.object({\n    "self": ${selfSchema}\n  })`;
              } else {
                pSchema = generateForType(ptype, depth + 1, new Set(seen), depSet);
              }
            } else {
              pSchema = generateForType(ptype, depth + 1, new Set(seen), depSet);
            }
            propParts.push(`${JSON.stringify(pname)}: ${pSchema}${optional ? '.optional()' : ''}`);
          }
          const body = `export const ${genName} = z.object({\n  ${propParts.join(',\n  ')}\n});`;
          generatedMap.set(genName, { body, deps: depSet });
        }
      }
    }

    return genName;
  }

  return 'z.any()';
}

for (const sf of sourceFiles) {
  const exports = sf.getExportedDeclarations();
  for (const [name, decls] of exports) {
    for (const d of decls) {
      const kind = d.getKindName();
      if (!['InterfaceDeclaration', 'TypeAliasDeclaration'].includes(kind)) continue;

      const symbol = (d as any).getSymbol?.();
      if (!symbol) continue;

      const genName = refNameForSymbol(name);
      if (generatedMap.has(genName)) continue;

      const declsOfSymbol = symbol.getDeclarations();
      const first = declsOfSymbol?.[0];
      const deps = new Set<string>();
      if (first) {
        const t = checker.getTypeAtLocation(first);
        if (t && (t.isInterface() || t.isObject() || t.isClass())) {
          const propParts: string[] = [];
          for (const p of t.getProperties()) {
            const pname = p.getName();
            const ptype = checker.getTypeOfSymbolAtLocation(p, first);
            const optional = p.isOptional();
            let pSchema: string;
            if (pname === '_links') {
              const selfProp = ptype.getProperty('self');
              if (selfProp) {
                const selfType = checker.getTypeOfSymbolAtLocation(selfProp, first);
                const selfSchema = generateForType(selfType, 0, new Set(), deps);
                pSchema = `z.object({\n    "self": ${selfSchema}\n  })`;
              } else {
                pSchema = generateForType(ptype, 0, new Set(), deps);
              }
            } else {
              pSchema = generateForType(ptype, 0, new Set(), deps);
            }
            propParts.push(`${JSON.stringify(pname)}: ${pSchema}${optional ? '.optional()' : ''}`);
          }
          const body = `export const ${genName} = z.object({\n  ${propParts.join(',\n  ')}\n});`;
          generatedMap.set(genName, { body, deps });
          continue;
        }
      }
      generatedMap.set(genName, { body: `export const ${genName} = z.any();`, deps });
    }
  }
}

for (const [name, entry] of generatedMap) {
  const kebab = toKebab(name);
  const filePath = path.join(outDirectory, `${kebab}.ts`);
  const imports: string[] = ["import { z } from 'zod';"];
  const depImports = Array.from(entry.deps).filter((d) => d !== name);
  for (const dep of depImports) {
    const depKebab = toKebab(dep);
    imports.push(`import { ${dep} } from './${depKebab}';`);
  }
  const text = `${imports.join('\n')}\n\n${entry.body}\n`;
  fs.writeFileSync(filePath, text);
}

const genFiles = fs.readdirSync(outDirectory).filter((f) => f.endsWith('.ts'));
const topExports = genFiles.map((f) => `export * from './${f.replace('.ts', '')}';`);
const topIndex = "import { z } from 'zod';\n\n" + topExports.join('\n');
fs.writeFileSync(schemasIndex, topIndex);

console.log('Generated', generatedMap.size, 'schemas into', outDirectory);
console.log('Wrote top-level index to', schemasIndex);
