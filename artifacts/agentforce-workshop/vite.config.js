import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";
import { createRequire } from "module";
import { execSync } from "child_process";

// Force all nested dependencies to resolve to the same React instance.
// Without this, Vite can bundle two copies of React when a dependency
// (e.g. @clerk/shared v3 inside @clerk/themes) resolves to a different
// module ID than the one used by the main app, causing React hook errors
// (#185) in production builds only.
const require = createRequire(import.meta.url);
const reactPath = path.dirname(require.resolve("react/package.json"));
const reactDomPath = path.dirname(require.resolve("react-dom/package.json"));
const buildSha = (() => {
  try {
    return execSync("git rev-parse --short HEAD", { stdio: ["ignore", "pipe", "ignore"] })
      .toString()
      .trim();
  } catch {
    return "unknown";
  }
})();

const port = Number(process.env.PORT) || 3000;

export default defineConfig({
  plugins: [react()],
  define: {
    __BUILD_SHA__: JSON.stringify(buildSha),
  },
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
