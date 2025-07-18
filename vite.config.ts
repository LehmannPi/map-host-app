import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'map_host_app',
      // Modules to expose
      exposes: {},
      remotes: {},
      shared: ['react', 'react-dom'],
    }),
  ],
});
