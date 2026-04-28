import { defaultExclude, defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    conditions: ['@blizzard-api/source'],
  },
  test: {
    coverage: {
      exclude: [
        ...defaultExclude,
        //There's no reason to test the index files as they are just exporting what is already tested
        '**/index.ts',
        //Ignore the config files
        '**/.prettierrc.js',
        '**/vitest.workspace.ts',
      ],
      provider: 'v8',
      reporter: ['html', 'lcov'],
    },
    globals: true,
    projects: ['packages/*'],
  },
});
