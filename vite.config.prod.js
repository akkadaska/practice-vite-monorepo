import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const entries = {
  INDEX: '',
  FOO_BAR: 'foo/',
};

// https://vitejs.dev/config/
export default defineConfig({
  define: { 'process.env.NODE_ENV': "'production'" },
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        INDEX: resolve(__dirname, 'src/index.tsx'),
        FOO_BAR: resolve(__dirname, 'src/foo/bar.tsx'),
      },
      output: {
        manualChunks: () => 'app',
        entryFileNames: `[name].js`,
        assetFileNames: (arg) => {
          const name = arg.name.split('.')[0];
          return (entries[name] ?? '') + arg.name;
        },
      },
    },
  },
  resolve: {
    alias: {
      '@fruit': '@practice-vite-monorepo/fruit',
    },
  },
});
