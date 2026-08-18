import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";
import { createRequire } from "module";

// Force all nested dependencies to resolve to the same React instance.
const require = createRequire(import.meta.url);
const reactPath = path.dirname(require.resolve("react/package.json"));
const reactDomPath = path.dirname(require.resolve("react-dom/package.json"));

export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      react: reactPath,
      "react-dom": reactDomPath,
    },
    dedupe: ["react", "react-dom"],
  },
  build: {
    outDir: "dist/public",
    emptyOutDir: true,
  },
});
