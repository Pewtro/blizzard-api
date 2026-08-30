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
        //The generated folder is to help with tests not something to be tested itself
        'generated/**',
        //Ignore the root files for coverage purposes
        '*.js',
        '*.ts',
      ],
      provider: 'v8',
      reporter: ['html', 'lcov'],
    },
    isolate: false,
    // Limit the number of concurrent test runs to avoid overwhelming the blizzard API with requests that could cause 429.
    maxWorkers: '50%',
    projects: [
      {
        test: {
          exclude: [...defaultExclude, 'packages/integration-tests'],
          include: ['packages/**/*.test.ts'],
          name: 'unit',
        },
      },
      {
        test: {
          include: ['packages/integration-tests/**/*.test.ts'],
          name: 'integration',
        },
      },
    ],
    testTimeout: 20_000,
  },
});
