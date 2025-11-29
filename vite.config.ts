import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Page Share',
        short_name: 'Page Share',
        start_url: '/',
        display: 'standalone',
      },
    }),
  ],
  server: {
    port: 5001,
  }
})
