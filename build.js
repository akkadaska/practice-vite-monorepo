const { build } = require('vite');
const { rimraf } = require('rimraf');
const { resolve } = require('path');
const viteReact = require('@vitejs/plugin-react');

const buildPackages = async (
  rootDirPath,
  entries,
  plugins,
) => {
  await rimraf(resolve(rootDirPath, 'dist'));

  for (const entry of entries) {
    await build({
      define: { 'process.env.NODE_ENV': "'production'" },
      publicDir: false,
      plugins,
      build: {
        outDir: resolve(rootDirPath, 'dist'),
        assetsDir: '.',
        rollupOptions: {
          input: resolve(rootDirPath, entry.entry),
          output: {
            entryFileNames: entry.outputJs,
            assetFileNames: ({ name }) => {
              if (name === undefined) {
                throw new Error('name is undefined');
              }
              if (name.endsWith('.css')) {
                return entry.outputCss;
              }
              return name;
            },
          },
        },
        emptyOutDir: false,
      },
      configFile: false,
      resolve: {
        alias: {
          '@fruit': '@practice-vite-monorepo/fruit',
        },
      },
    });
  }
};

buildPackages(__dirname, [{
  entry: 'src/index.tsx',
  outputJs: 'app.js',
  outputCss: 'style.css',
}, {
  entry: 'src/foo/bar.tsx',
  outputJs: 'foo/bar.js',
  outputCss: 'foo/bar-style.css',
}], [viteReact()])