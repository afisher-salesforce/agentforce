import { Router, type IRouter } from "express";
import { getAuth } from "@clerk/express";
import { isUserAllowed } from "../lib/allowlist";

const router: IRouter = Router();

/**
 * GET /api/auth/check
 *
 * Verifies that the authenticated user's email address is on the allowlist.
 * Returns 200 { allowed: true } when access is granted, 403 otherwise.
 * The frontend must not render protected content until this endpoint
 * responds with 200 — client-side checks alone are not a security boundary.
 */
router.get("/auth/check", async (req, res) => {
  const { userId } = getAuth(req);

  if (!userId) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    const allowed = await isUserAllowed(userId);

    if (!allowed) {
      res.status(403).json({ error: "Forbidden" });
      return;
    }

    res.json({ allowed: true });
  } catch {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
