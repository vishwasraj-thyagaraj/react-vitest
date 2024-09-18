import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import autoprefixer from 'autoprefixer';
import * as sass from 'sass';

export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
    postcss: {
      plugins: [
        autoprefixer({}), // add options if needed
      ],
    },
  },
  test: {
    globals: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
});
