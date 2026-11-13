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
    includeVersion: true,
  },
  plugin: ['typedoc-plugin-markdown'],
  readme: 'none',
};
export default config;
