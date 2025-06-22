import { defineConfig } from 'vite';

export default defineConfig({
  // Plugin build configuration
  build: {
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
    },
    // Enable watching in dev mode
    watch: {}
  },
  
  // TypeScript configuration  
  esbuild: {
    target: 'es2020'
  },
  
  // Enable verbose logging for debugging
  logLevel: 'info'
});