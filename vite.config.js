
import { defineConfig } from 'vite';
import { resolve } from 'path'

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist', // Output directory for the built files
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'pages/home/home.html'),
        about: resolve(__dirname, 'pages/about/about.html'),
        projects: resolve(__dirname, 'pages/projects/projects.html'),
      }
    }
  },

  resolve: {
    alias: {
      '/': resolve(__dirname, 'pages/home/')
    }
  }
  
});