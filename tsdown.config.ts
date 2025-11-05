import { defineConfig } from 'tsdown';

export default defineConfig(({ watch = false }) => ({
  clean: true,
  dts: true,
  entry: {
    index: './src/index.ts',
  },
  external: [],
  fixedExtension: false,
  format: 'esm',
  outDir: 'dist',
  sourcemap: true,
  treeshake: true,
  watch,
}));
