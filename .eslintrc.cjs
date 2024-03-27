module.exports = {
  root: true,
  extends: ['@putstack/typescript'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  rules: {},
};
