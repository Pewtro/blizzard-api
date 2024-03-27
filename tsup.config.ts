import { defineConfig } from 'tsup';

export default defineConfig(({ watch = false }) => ({
  clean: true,
  dts: true,
  sourcemap: true,
  entry: {
    index: './src/index.ts',
  },
  external: [],
  format: ['cjs', 'esm'],
  watch,
  outDir: 'dist',
}));
