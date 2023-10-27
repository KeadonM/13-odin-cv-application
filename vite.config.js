import { resolve } from 'path';
import { defineConfig } from 'vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import react from '@vitejs/plugin-react';

const outDir = resolve(__dirname, 'dist');

export default defineConfig({
  plugins: [ViteMinifyPlugin({}), react()],
  build: {
    outDir,
    emptyOutDir: true,
    minify: 'terser',
    terserOptions: {
      output: {
        comments: false,
      },
    },
  },
});
