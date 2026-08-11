import { configs as putstackConfigs } from '@putstack/eslint-config-typescript';
import { configs as jsdocConfigs } from 'eslint-plugin-jsdoc';
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
  jsdocConfigs['flat/recommended-typescript'],
  putstackConfigs.recommended,
  {
    files: ['generated/schemas/**'],
    rules: {
      'unicorn/max-nested-calls': 'off',
      'unicorn/no-non-function-verb-prefix': 'off',
    },
  },
);
