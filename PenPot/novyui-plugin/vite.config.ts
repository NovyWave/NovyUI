import { defineConfig } from 'vite';
import fs from 'fs';

export default defineConfig({
  plugins: [
    {
      name: 'cors-plugin',
      configureServer(server) {
        server.middlewares.use('/', (req, res, next) => {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
          res.setHeader('Access-Control-Allow-Headers', '*');
          res.setHeader('Access-Control-Max-Age', '86400');
          
          if (req.method === 'OPTIONS') {
            res.statusCode = 204;
            res.end();
            return;
          }
          next();
        });
      }
    }
  ],
  // Dev server configuration
  server: {
    port: 5173,
    host: '0.0.0.0',
    https: {
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem')
    },
    cors: {
      origin: '*',
      credentials: false
    }
  },
  
  // Plugin build configuration
  build: {
    lib: {
      entry: 'src/plugin.js',
      name: 'plugin',
      fileName: 'plugin',
      formats: ['es']
    },
    rollupOptions: {
      output: {
        entryFileNames: 'plugin.js'
      }
    }
  },
  
  // TypeScript configuration  
  esbuild: {
    target: 'es2020'
  }
});