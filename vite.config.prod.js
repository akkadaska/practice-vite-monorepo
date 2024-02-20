import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  define: { 'process.env.NODE_ENV': "'production'" },
  plugins: [react()],
  resolve: {
    alias: {
      '@practice-vite-monorepo/fruit': resolve(__dirname, './packages/fruit'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'root',
      formats: ['es'],
      fileName: () => `root.js`,
    },
  },
});
