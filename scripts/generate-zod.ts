#!/usr/bin/env node
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable jsdoc/require-jsdoc */
import { existsSync } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';
import { generate } from 'ts-to-zod';

const root = process.cwd();
const packagesDirectory = path.join(root, 'packages');

// Maintain an explicit whitelist of packages to process. Edit this array
// to add/remove packages. Packages not in this list will be skipped.
// Note: `client` is intentionally omitted.
const PACKAGE_WHITELIST = new Set(['classic-wow', 'core', 'd3', 'hs', 'sc2', 'wow']);

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
    // For `core` we want to generate from all `.ts` files (except `.test.ts`).
    // For other packages, only convert `types.ts` files.
    const tsFiles: Array<string> =
      packageName === 'core'
        ? allFiles.filter((f) => f.endsWith('.ts') && !f.endsWith('.test.ts') && !f.endsWith('index.ts'))
        : allFiles.filter((f) => path.basename(f) === 'types.ts');

    const packageOut = path.join(root, 'generated', packageName);
    // Clean package output
    await fs.rm(packageOut, { force: true, recursive: true });
    await fs.mkdir(packageOut, { recursive: true });

    for (const file of tsFiles) {
      try {
        console.log('Generating schema for', path.relative(root, file));

        const content = await fs.readFile(file, 'utf8');
        const generator = generate({
          keepComments: true,
          skipParseJSDoc: true,
          sourceText: content,
        });

        const schema = generator.getZodSchemasFile(file);

        const parentName = path.basename(path.dirname(file));
        // Special-case `core`: use the original file name (e.g. `blizzard-api.ts`, `resource.ts`)
        // to avoid many files named `src.ts` overwriting each other.
        const outName = packageName === 'core' ? path.basename(file) : `${parentName}.ts`;
        const outPath = path.join(packageOut, outName);
        await fs.writeFile(outPath, schema, 'utf8');
        console.log('Wrote', path.relative(root, outPath));
      } catch (error) {
        console.error('Failed to generate for', file, (error as Error)?.message ?? error);
      }
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
