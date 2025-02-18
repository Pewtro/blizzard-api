import { defineConfig } from 'tsup';

export default defineConfig(({ watch = false }) => ({
  clean: true,
  dts: true,
  entry: ['src/**/*.ts', '!src/**/*.test.ts'],
  external: [],
  format: 'esm',
  outDir: 'dist',
  sourcemap: true,
  treeshake: true,
  watch,
}));
