import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // You can add custom aliases for convenience
      '@': '/src',
    },
  },
  server: {
    // Customize host and port if needed
    host: 'localhost',
    port: 3000,
  },
});
