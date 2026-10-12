import { defaultExclude, defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    conditions: ['@blizzard-api/source'],
  },
  test: {
    coverage: {
      exclude: [
        ...defaultExclude,
        //The generated folder is to help with tests not something to be tested itself
        'generated/**',
        //Integration tests exercise the live API and contribute no deterministic coverage
        'packages/integration-tests/**',
        //Ignore the root files for coverage purposes.
        '*.{js,ts}',
        //Test files themselves
        '**/*.test.ts',
      ],
      provider: 'v8',
      reporter: ['html', 'lcov'],
    },
    isolate: false,
    // Limit the number of concurrent test runs to avoid overwhelming the blizzard API with requests that could cause 429.
    maxWorkers: '50%',
    projects: [
      //A test file that hits the live Blizzard API must be named `*.integration.test.ts`.
      //Unit tests must not require credentials or network access, which keeps them runnable
      //for contributors and on pull requests from forks, where secrets are unavailable.
      {
        test: {
          exclude: [...defaultExclude, '**/*.integration.test.ts'],
          include: ['packages/**/*.test.ts'],
          name: 'unit',
        },
      },
      {
        test: {
          include: ['packages/**/*.integration.test.ts'],
          name: 'integration',
        },
      },
    ],
    testTimeout: 20_000,
  },
});
