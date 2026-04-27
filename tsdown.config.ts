import { defineConfig } from 'tsdown';

export default defineConfig(({ watch = false }) => ({
  attw: {
    profile: 'esm-only',
  },
  clean: true,
  dts: true,
  entry: {
    index: './src/index.ts',
  },
  fixedExtension: false,
  format: 'esm',
  outDir: 'dist',
  publint: true,
  sourcemap: true,
  treeshake: true,
  watch,
}));
