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

export const external = [...dependencies, 'react/jsx-runtime'];

// https://vitejs.dev/config/
export const commonViteConfig = {
  define: { 'process.env.NODE_ENV': "'production'" },
  plugins: [react()],
  resolve: {
    alias: {
      '@fruit': resolve(__dirname, './src/'),
    },
  },
};
