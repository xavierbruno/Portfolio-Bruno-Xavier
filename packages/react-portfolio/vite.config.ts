import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { cpSync, existsSync } from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@shared': path.resolve(__dirname, '../shared/src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  plugins: [
    react(),
    {
      name: 'copy-vue-dist',
      closeBundle() {
        const vueDist = path.resolve(__dirname, '../vue-portfolio/dist');
        const dest = path.resolve(__dirname, 'dist/vue');
        if (existsSync(vueDist)) {
          cpSync(vueDist, dest, { recursive: true });
        }
      },
    },
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
});
