import { defineConfig } from 'tsup';

export default defineConfig(({ watch = false }) => ({
  clean: true,
  dts: true,
  entry: {
    index: './src/index.ts',
  },
  external: [],
  format: 'esm',
  outDir: 'dist',
  sourcemap: true,
  treeshake: true,
  watch,
}));
