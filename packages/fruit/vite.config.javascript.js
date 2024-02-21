import { defineConfig } from 'vite';
import { resolve } from 'path';
import { external, commonViteConfig } from './vite.config.common';

// https://vitejs.dev/config/
export default defineConfig({
  ...commonViteConfig,
  build: {
    outDir: 'dist',
    assetsDir: '.',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'fruit',
      formats: ['es'],
      fileName: () => `index.js`,
    },
    rollupOptions: {
      external: [...external],
      output: {
        globals: {
          react: 'react',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
  },
});
