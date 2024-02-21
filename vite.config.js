import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  root: resolve(__dirname, 'src'),
  plugins: [
    react(),
    {
      name: 'ignore-lib-css',
      transform(code, id) {
        if (
          id.endsWith('.js') ||
          id.endsWith('.ts') ||
          id.endsWith('.jsx') ||
          id.endsWith('.tsx')
        ) {
          // 開発中のみCSSファイルのインポートを無効化する
          const updatedCode = code.replace(
            /import\s+(['"]@fruit\/.*?\.css['"]);/g,
            '//$&',
          );
          return {
            code: updatedCode,
            map: null,
          };
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@fruit': resolve(__dirname, './packages/fruit/src/'),
    },
  },
});
