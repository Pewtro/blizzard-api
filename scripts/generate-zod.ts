#!/usr/bin/env node
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable jsdoc/require-jsdoc */
import { existsSync } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';
import { generate } from 'ts-to-zod';
import { inputOutputMappings } from './input-output-mapping';

const root = process.cwd();
const packagesDirectory = path.join(root, 'packages');

// Maintain an explicit whitelist of packages to process.
const PACKAGE_WHITELIST = new Set(['classic-wow', 'core', 'd3', 'hs', 'sc2', 'wow']);
const HANDLE_ALL_FILE_FOLDERS = new Set(['core']);

async function main() {
  try {
    await run();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

async function run(): Promise<void> {
  // Iterate packages/* and generate for each package that has a `src` folder
  const packageEntries = await fs.readdir(packagesDirectory, { withFileTypes: true });
  for (const packageEntry of packageEntries) {
    if (!packageEntry.isDirectory()) continue;
    const packageName = packageEntry.name;

    // Only process packages listed in the whitelist
    if (!PACKAGE_WHITELIST.has(packageName)) continue;
    const packageSource = path.join(packagesDirectory, packageName, 'src');
    if (!existsSync(packageSource)) {
      // no src for this package — skip
      continue;
    }

    console.log('Processing package', packageName);

    const allFiles = await walk(packageSource);
    // For some packages, such as `core`, we want to generate from all `.ts` files (except `.test.ts`).
    // For other packages, only convert `types.ts` files.
    const tsFiles: Array<string> = HANDLE_ALL_FILE_FOLDERS.has(packageName)
      ? allFiles.filter((f) => f.endsWith('.ts') && !f.endsWith('.test.ts') && !f.endsWith('index.ts'))
      : allFiles.filter((f) => path.basename(f) === 'types.ts');

    const packageOut = path.join(root, 'generated', packageName);
    // Clean package output
    await fs.rm(packageOut, { force: true, recursive: true });
    await fs.mkdir(packageOut, { recursive: true });

    for (const file of tsFiles) {
      try {
        //console.log('Generating schema for', path.relative(root, file));

        const content = await fs.readFile(file, 'utf8');
        const generator = generate({
          inputOutputMappings,
          keepComments: false,
          skipParseJSDoc: false,
          sourceText: content,
        });

        const schema = generator.getZodSchemasFile(file);

        if (generator.errors.length > 0) {
          for (const error of generator.errors) {
            console.error(error);
          }
        }

        const parentName = path.basename(path.dirname(file));
        // For the packages where we only handle `types.ts`, use the parent folder name as output file name.
        // E.g. `packages/wow/src/character-hunter-pets/types.ts` -> `generated/wow/character-hunter-pets.ts`
        // For other packages (like `core`), we use the original file name.
        const outName = HANDLE_ALL_FILE_FOLDERS.has(packageName) ? path.basename(file) : `${parentName}.ts`;
        const outPath = path.join(packageOut, outName);
        await fs.writeFile(outPath, schema, 'utf8');
        //console.log('Wrote', path.relative(root, outPath));
      } catch (error) {
        console.error('Failed to generate for', file, (error as Error)?.message ?? error);
      }
    }

    // After generating all files for the package, write an `index.ts` that
    // re-exports everything in the package output directory.
    try {
      const generatedFiles = await fs.readdir(packageOut);
      const exportLines = generatedFiles
        .filter((f) => f.endsWith('.ts') && f !== 'index.ts')
        .map((f) => `export * from './${path.basename(f, '.ts')}';`);

      if (exportLines.length > 0) {
        const indexContent = exportLines.join('\n') + '\n';
        await fs.writeFile(path.join(packageOut, 'index.ts'), indexContent, 'utf8');
        console.log('Wrote', path.relative(root, path.join(packageOut, 'index.ts')));
      }
    } catch (error) {
      console.error('Failed to write index.ts for', packageName, (error as Error)?.message ?? error);
    }
  }
}

async function walk(directory: string, filelist: Array<string> = []): Promise<Array<string>> {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await walk(full, filelist);
    } else {
      filelist.push(full);
    }
  }
  return filelist;
}

await main();
