import { defineConfig } from "vite";
import livePreview from "vite-live-preview";
import fs from "fs";

export default defineConfig({
  plugins: [
    livePreview({
      reload: true,
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        plugin: "src/plugin.ts",
        index: "./index.html",
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
  preview: {
    port: 4400,
    https: {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    cors: {
      origin: "*",
      credentials: false,
    },
  },
});