---
name: Clerk + Vite duplicate React fix
description: React hook error #185 in production builds when @clerk/themes and @clerk/react pull in different major versions of @clerk/shared, causing Vite to bundle two React-adjacent module graphs.
---

# React #185 in Clerk production builds (Vite + pnpm)

## The rule
Any Vite project using both `@clerk/react` and `@clerk/themes` must add `resolve.alias` + `resolve.dedupe` in `vite.config.js` to pin React to a single physical path.

**Why:** `@clerk/react@6.x` depends on `@clerk/shared@4.x`, while `@clerk/themes@2.x` depends on `@clerk/shared@3.x`. pnpm installs both. In production builds, Vite resolves modules by ID and can create two separate module graphs for code that imports React through different `@clerk/shared` versions — even though `pnpm why react` shows only one physical copy. This causes React #185 (invalid hook call) exclusively in production; dev mode works because Vite's dev server resolves modules differently.

**How to apply:** In `vite.config.js`:
```js
import { createRequire } from "module";
import path from "path";
const require = createRequire(import.meta.url);
const reactPath = path.dirname(require.resolve("react/package.json"));
const reactDomPath = path.dirname(require.resolve("react-dom/package.json"));

export default defineConfig({
  resolve: {
    alias: { react: reactPath, "react-dom": reactDomPath },
    dedupe: ["react", "react-dom"],
  },
  // ... rest of config
});
```

## Symptoms
- React error #185 ("invalid hook call") in production bundle only
- Error appears at identical bytecell positions across multiple builds (library code, not app code)
- Fresh incognito window triggers it immediately — not auth-related
- `pnpm why react` shows a single version — this is misleading; the issue is Vite module ID resolution, not pnpm deduplication

## What does NOT fix it
- Removing custom hook components (e.g. ClerkLoadingGuard) — wrong diagnosis
- Updating @clerk/react version — both repos use same version
- Checking for conditionally-called hooks in app code — the error is in bundled library code
