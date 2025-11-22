import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Write tests into this package's `src/tests` directory so files live inside the package
const outDir = path.resolve(__dirname, '../src/tests');

function ensureDir(d: string) {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
}

ensureDir(outDir);

// Simpler parser: scan package `src/index.ts` files for exported function names.
const repoRoot = path.resolve(__dirname, '../..');
const endpoints: Array<{ pkg: string; name: string; file: string }> = [];
const packagesDir = path.join(repoRoot, 'packages');
function walkDir(dir: string, cb: (file: string) => void) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walkDir(p, cb);
    else if (ent.isFile() && p.endsWith('.ts')) cb(p);
  }
}

for (const pkgName of fs.readdirSync(packagesDir)) {
  const pkgSrc = path.join(packagesDir, pkgName, 'src');
  if (!fs.existsSync(pkgSrc)) continue;
  walkDir(pkgSrc, (file) => {
    const src = fs.readFileSync(file, 'utf8');
    const fnRegex = /export\s+function\s+([A-Za-z0-9_]+)\s*\(/g;
    let m: RegExpExecArray | null;
    while ((m = fnRegex.exec(src))) {
      const name = m[1] as string;
      endpoints.push({ pkg: pkgName, name, file });
    }
  });
}

// Helper to map endpoint -> schema name
function schemaNameFor(pkg: string, fnName: string) {
  const capitalized = fnName.charAt(0).toUpperCase() + fnName.slice(1);
  return `${capitalized}ResponseSchema`;
}

function toKebab(name: string) {
  return name
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[_\s]+/g, '-')
    .replace(/[^A-Za-z0-9-]/g, '')
    .toLowerCase();
}

// Emit a test per endpoint that imports the schema from the schemas package (assume root `schemas/src/index.ts`)
const indexImports = new Set<string>();
for (const e of endpoints) {
  const fileName = `${toKebab(e.pkg)}-${toKebab(e.name)}.test.ts`;
  const testFile = path.join(outDir, fileName);
  const schemaName = schemaNameFor(e.pkg, e.name);
  indexImports.add(schemaName);
  const content = `import { expect, test } from 'vitest';
import { createBlizzardApiClient } from '../../../packages/client/src';
import { ${schemaName} } from '../generated';

test('${e.pkg}.${e.name} should match ${schemaName}', async () => {
  const client = await createBlizzardApiClient({
    key: process.env.VITE_BLIZZARD_CLIENT_ID!,
    origin: 'eu',
    secret: process.env.VITE_BLIZZARD_CLIENT_SECRET!,
  });

  try {
    const mod = await import('../../../packages/' + ${JSON.stringify(e.pkg)} + '/src/index');
    const fn = mod['${e.name}'];
    if (typeof fn !== 'function') {
      throw new Error('Endpoint function not found');
    }
    const resource = fn();
    const res = await client.sendRequest(resource);
    const parsed = ${schemaName}.safeParse(res);
    if (!parsed.success) {
      console.error(parsed.error.format());
    }
    expect(parsed.success).toBe(true);
  } catch (err) {
    console.warn('Skipping test for', ${JSON.stringify(e.pkg + '.' + e.name)}, err && (err as Error).message);
    throw err;
  }
});
`;
  fs.writeFileSync(testFile, content, 'utf8');
}

console.log('Wrote', endpoints.length, 'generated test files to', outDir);
