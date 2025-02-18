import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/omniglobaledu.github.io/', // For GitHub Pages
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // server: {
  //   host: true, // Allows access via your network IP
  //   port: 5173, // Optional: ensures you're using the desired port
  // },

});
