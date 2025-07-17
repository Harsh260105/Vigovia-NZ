import { defineConfig } from "vite";
import path from "path";

// Client build configuration for production
export default defineConfig({
  build: {
    outDir: "dist/spa",
    minify: true,
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
  define: {
    "process.env.NODE_ENV": '"production"',
  },
});
