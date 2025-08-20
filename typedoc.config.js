/* eslint-disable jsdoc/check-tag-names */
/** @type {Partial<import("typedoc").TypeDocOptions>} */
const config = {
  entryPoints: ['packages/*'],
  entryPointStrategy: 'packages',
  navigation: {
    includeGroups: true,
  },
  packageOptions: {
    entryPoints: ['src/index.ts'],
    includeVersion: true,
  },
  plugin: ['typedoc-github-theme'],
  theme: 'typedoc-github-theme',
};

export default config;
