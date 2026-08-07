import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const rawPort = process.env.PORT;
if (!rawPort) throw new Error("PORT environment variable is required.");
const port = Number(rawPort);

const basePath = process.env.BASE_PATH || "/";

export default defineConfig({
  base: basePath,
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(path.dirname(new URL(import.meta.url).pathname), "..", "..", "attached_assets"),
    },
  },
  root: path.resolve(path.dirname(new URL(import.meta.url).pathname)),
  build: {
    outDir: path.resolve(path.dirname(new URL(import.meta.url).pathname), "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
