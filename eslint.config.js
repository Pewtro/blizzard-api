import { configs as putstackConfigs } from '@putstack/eslint-config-typescript';
import jsdocEslint from 'eslint-plugin-jsdoc';
import { defineConfig } from 'eslint/config';

export default defineConfig(
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
