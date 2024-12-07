import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration
export default defineConfig({
  base:"/romany_portfolio/",
  plugins: [react()],
  outDir: 'dist',  // Ensure the output directory is 'dist'
});
