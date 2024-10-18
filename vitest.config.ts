import { defaultExclude, defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    conditions: [
      '@blizzard-api/classic-wow-local',
      '@blizzard-api/client-local',
      '@blizzard-api/core-local',
      '@blizzard-api/d3-local',
      '@blizzard-api/hs-local',
      '@blizzard-api/sc2-local',
      '@blizzard-api/wow-local',
    ],
  },
  test: {
    coverage: {
      exclude: [
        ...defaultExclude,
        //There's no reason to test the index files as they are just exporting what is already tested
        '**/index.ts',
        //Ignore the config files
        '**/.eslintrc.cjs',
        '**/.prettierrc.js',
        '**/vitest.workspace.ts',
      ],
      provider: 'v8',
      reporter: ['html', 'lcov'],
    },
    globals: true,
  },
});
