import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { join, resolve } from 'path';
import { existsSync, readFileSync } from 'fs';

const packageJsonPath = join(__dirname, 'package.json');
const packageJson = existsSync(packageJsonPath)
  ? JSON.parse(readFileSync(packageJsonPath))
  : {};
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const dependencies = Object.keys({
  ...packageJson.dependencies,
  ...packageJson.peerDependencies,
});

// https://vitejs.dev/config/
export default defineConfig({
  define: { 'process.env.NODE_ENV': "'production'" },
  plugins: [react()],
  resolve: {
    alias: {
      '@practice-vite-monorepo/fruit': resolve(__dirname, './src/'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'fruit',
      formats: ['es'],
      fileName: () => `fruit.js`,
    },
    rollupOptions: {
      external: [...dependencies],
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
