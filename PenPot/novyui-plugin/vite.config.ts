import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    cors: {
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
      credentials: false
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With'
    },
    hmr: true,
    watch: {
      usePolling: true,
      interval: 100
    }
  },
  build: {
    watch: {},
    lib: {
      entry: 'src/plugin.ts',
      name: 'plugin',
      fileName: 'plugin',
      formats: ['es']
    },
    rollupOptions: {
      output: {
        entryFileNames: 'plugin.js'
      }
    }
  }
});