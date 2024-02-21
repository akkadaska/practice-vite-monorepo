import { defineConfig } from 'vite';
import { resolve } from 'path';
import { external, commonViteConfig } from './vite.config.common';

// https://vitejs.dev/config/
export default defineConfig({
  ...commonViteConfig,
  build: {
    outDir: resolve(__dirname, 'styles'),
    assetsDir: '.',
    rollupOptions: {
      input: {
        Apple: resolve(__dirname, 'src/Apple.tsx'),
        Banana: resolve(__dirname, 'src/Banana.tsx'),
      },
      output: {
        entryFileNames: `[name].js`,
        assetFileNames: (arg) => {
          return arg.name;
        },
        globals: {
          react: 'react',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
      external: [...external],
    },
  },
});
