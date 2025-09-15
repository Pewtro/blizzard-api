import { configs as putstackConfigs } from '@putstack/eslint-config-typescript';
import jsdocEslint from 'eslint-plugin-jsdoc';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['**/coverage/**', '**/dist/**', '**/node_modules/**', '**/build/**', '**/docs/**', '!.prettierrc.js'],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  jsdocEslint.configs['flat/recommended-typescript'],
  putstackConfigs.recommended,
);
