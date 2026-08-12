# Repository Structure

This repository now uses a React monorepo layout as the primary implementation.

## Active application

- Frontend app: `artifacts/agentforce-workshop`
- Auth and allowlist logic: `artifacts/agentforce-workshop/src/App.jsx`
- Build output for Replit deployment: `dist/`

## Notes

- Legacy static HTML pages and shared static assets were removed from the repository root to avoid confusion with the active React implementation.
- Keep deployment and content updates focused on the `artifacts/agentforce-workshop` app.
