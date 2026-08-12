# Deployment Runbook (Replit + GitHub)

This project uses a pnpm workspace. For reliable Replit deployments, always build and run the app package directly.

## Branch and commit verification

1. Confirm Replit is pointed at the intended branch:
   - `cursor/react-prebuilt-dist-deploy` (default), or
   - `feature/replit-clerk-auth-domain-restriction`
2. Confirm the deployed app shows a sidebar build stamp:
   - `Build: <short-sha>`
3. Verify the stamp matches the latest commit on the branch in GitHub.

## One-time pnpm approval

If Replit blocks dependency build scripts, run:

```bash
pnpm approve-builds
```

Approve:
- `@clerk/shared`
- `esbuild` (if prompted)

## Install/build/start commands (recommended)

Use these commands in Replit deployment settings:

- **Install**

```bash
pnpm install --frozen-lockfile
```

- **Build**

```bash
pnpm --filter @workspace/agentforce-workshop run build
```

- **Start**

```bash
pnpm --filter @workspace/agentforce-workshop run start
```

## Quick auth smoke test

1. Open an incognito window to the app URL.
2. Sign in with an allowed domain user.
3. Confirm:
   - app content renders (not blank),
   - `/api/auth/check` is called,
   - build stamp matches GitHub HEAD.

## If deployment still serves stale code

1. Redeploy from Replit (fresh deployment, not just restart).
2. Hard refresh browser (`Cmd+Shift+R`).
3. Recheck branch mapping in Replit.
4. Compare displayed build stamp to GitHub commit.
