import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
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
  }
});
