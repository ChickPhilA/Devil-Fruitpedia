import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: '../server/public',
    emptyOutDir: true
  },
  server: {
    // Any new server-only route (a sendFile page or a JSON endpoint) needs
    // its own entry here, or Vite will silently serve index.html instead.
    proxy: {
      '/devil_fruits': {
        target: 'http://localhost:3001'
      },

      '/fruits': {
        target: 'http://localhost:3001'
      },

      '/public': {
        target: 'http://localhost:3001'
      }
    }
  }
})