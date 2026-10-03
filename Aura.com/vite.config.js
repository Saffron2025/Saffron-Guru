import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    // After the site is built, write a ready-made copy of every page
    // (own title, description, text and images) for search engines.
    {
      name: 'saffron-guru-prerender',
      apply: 'build',
      async closeBundle() {
        await import('./scripts/prerender.mjs');
      },
    },
  ],
  server: {
    // For local dev
    open: true
  },
  build: {
    outDir: 'dist'
  },
  // 👇 This is the key part to fix refresh 404 on Vercel
  resolve: {
    alias: {
      '@': '/src'
    }
  },


});
