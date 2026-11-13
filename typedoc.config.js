/* eslint-disable jsdoc/check-tag-names */
/** @type {Partial<import("typedoc").TypeDocOptions>} */
const config = {
  entryFileName: 'index',
  entryPoints: ['packages/*'],
  entryPointStrategy: 'packages',
  exclude: 'packages/integration-tests',
  out: 'docs/api',
  packageOptions: {
    entryPoints: ['src/index.ts'],
    excludeExternals: true,
    includeVersion: true,
  },
  plugin: ['typedoc-plugin-markdown', 'typedoc-plugin-missing-exports'],
  readme: 'none',
};
export default config;
