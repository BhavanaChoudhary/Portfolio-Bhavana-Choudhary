import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.mp4', '**/*.png', '**/*.jpg', '**/*.jpeg'],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',  // Organizes files in dist/assets/
  }
});