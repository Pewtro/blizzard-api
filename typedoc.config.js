/* eslint-disable jsdoc/check-tag-names */
/** @type {Partial<import("typedoc").TypeDocOptions>} */
const config = {
  entryPoints: ['packages/*'],
  entryPointStrategy: 'packages',
  exclude: 'packages/integration-tests',
  navigation: {
    includeGroups: true,
  },
  out: 'docs-build',
  packageOptions: {
    entryPoints: ['src/index.ts'],
    includeVersion: true,
  },
  plugin: ['typedoc-github-theme'],
  projectDocuments: ['docs/**/*.md'],
  readme: 'README.md',
  searchInDocuments: true,
  theme: 'typedoc-github-theme',
};

export default config;
