import config from '@putstack/oxfmt-config';
import { defineConfig } from 'oxfmt';

export default defineConfig({
  ...config,
  ignorePatterns: ['**/coverage/**', '**/dist/**', '**/node_modules/**', '**/build/**'],
});
