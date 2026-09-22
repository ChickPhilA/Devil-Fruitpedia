import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: '../server/public',
    emptyOutDir: true
  },
  server: {
    proxy: {
      '/devil_fruits': {
        target: 'http://localhost:3001'
      },

      '/public': {
        target: 'http://localhost:3001'
      }
    }
  }
})