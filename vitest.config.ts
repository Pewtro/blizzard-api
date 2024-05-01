import { defaultExclude, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['html', 'lcov'],
      exclude: [
        ...defaultExclude,
        //There's no reason to test the index files as they are just exporting what is already tested
        '**/index.ts',
        //Ignore the config files
        '**/.eslintrc.cjs',
        '**/.prettierrc.js',
        '**/vitest.workspace.ts',
      ],
    },
  },
});
