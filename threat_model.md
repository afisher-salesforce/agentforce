# Threat Model

## Project Overview

An Agentforce Workshop application — a Salesforce AI capability briefing resource for Siemens DISW IT leadership. It consists of a React SPA frontend (Vite/JSX) served as a static bundle and an Express 5 API server (TypeScript, Drizzle ORM, PostgreSQL). The deployment is public-facing on Replit Autoscale (`https://agentforce-workshop.replit.app`). Authentication is provided by Clerk.

The SPA contains confidential internal business briefing content (Siemens DISW strategy, capability maps, and executive discussion materials) intended to be restricted to two named email accounts.

## Assets

- **Restricted briefing content** — Internal Siemens DISW IT leadership discussion materials including strategic framing, operating model, and capability roadmaps bundled in `data.js`. Exposure could harm business negotiations or competitive positioning.
- **Clerk auth sessions** — User JWTs/cookies. Compromise allows impersonation.
- **API secrets** — `CLERK_SECRET_KEY`, `DATABASE_URL`. Used to authenticate Clerk proxy calls and access the database.
- **Named user email addresses** — Two specific Salesforce employee emails are rendered in the public landing page HTML.

## Trust Boundaries

- **Public Internet → SPA** — The Vite SPA is served publicly. All JS bundles including `data.js` are downloadable without authentication.
- **Browser → API Server** — All API requests cross this boundary. CORS is currently configured to reflect any origin with credentials.
- **API Server → Clerk FAPI** — Proxied through `/api/__clerk`. The proxy constructs the `Clerk-Proxy-Url` from client-supplied `x-forwarded-host`.
- **API Server → PostgreSQL** — Direct database access using Drizzle ORM. Currently no application-level queries exist beyond health check.
- **Signed-in user → Allowlisted user** — The access restriction (two named emails) is enforced only in client-side JavaScript, not on the server.

## Scan Anchors

- **Frontend entry**: `artifacts/agentforce-workshop/src/App.jsx` — Clerk auth, email allowlist (`DomainGuard`), and routing
- **Restricted content**: `artifacts/agentforce-workshop/src/data.js` — bundled into public JS, not gated server-side
- **API entry**: `artifacts/api-server/src/app.ts` — CORS config, Clerk middleware, routes
- **Clerk proxy**: `artifacts/api-server/src/middlewares/clerkProxyMiddleware.ts` — x-forwarded-host trust
- **Routes**: `artifacts/api-server/src/routes/` — currently only `/api/healthz`
- **Dev-only areas**: `artifacts/mockup-sandbox/` — design mockups, not production-reachable

## Threat Categories

### Spoofing / Authentication Bypass

Clerk provides authentication but the authorization layer (allowed-email check) is client-side only (`DomainGuard` in `App.jsx`). Any user who creates a Clerk account can bypass this check by modifying the browser JavaScript. Clerk itself does not restrict sign-ups to the two named accounts unless configured via Clerk dashboard restrictions.

Required guarantee: Authorization must be enforced server-side. The API must validate that the authenticated user's email is on the allowlist before serving any protected content, OR the content must not be included in the public bundle.

### Information Disclosure

The entire briefing content (`data.js`) is compiled into the public Vite JS bundle, which is served without any authentication gate at the CDN/static layer. Anyone can download the bundle directly from the deployment URL without signing in.

Additionally, the two allowlisted email addresses are rendered in the public landing page HTML, disclosing specific employee identities.

Required guarantee: Sensitive content must either be served from an authenticated API endpoint or excluded from the public bundle entirely.

### Tampering (CORS misconfiguration)

The API server sets `cors({ credentials: true, origin: true })`, which reflects any requesting origin and allows credentials. If the API gains authenticated routes, any website can make credentialed cross-origin requests on behalf of authenticated users, enabling CSRF-equivalent attacks.

Required guarantee: The `origin` option must be set to an explicit allowlist of trusted domains, not `true`.

### Elevation of Privilege

Client-side access control is never a security control. The email allowlist in `DomainGuard` can be bypassed by any JavaScript-capable browser user who creates a Clerk account. There is no server-side enforcement preventing an unallowlisted user from accessing the application data.
