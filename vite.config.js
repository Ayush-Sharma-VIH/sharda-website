// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';  // Make sure this plugin is imported

export default defineConfig({
  base: '/sharda-website/', // Your repository name
  plugins: [react()],       // Use the React plugin here to enable automatic JSX runtime
});
