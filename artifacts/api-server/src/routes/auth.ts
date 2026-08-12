import { Router, type IRouter } from "express";
import { getAuth, createClerkClient } from "@clerk/express";

// Allowed email domains — any user whose email ends with one of these
// domains is granted access. Server-side enforcement is authoritative.
const ALLOWED_DOMAINS = ["@salesforce.com", "@siemens.com"];

const clerkBackend = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY,
});

const router: IRouter = Router();

/**
 * GET /api/auth/check
 *
 * Verifies that the authenticated user has a salesforce.com or siemens.com
 * email address. Returns 200 { allowed: true } when access is granted, 403
 * otherwise. The frontend must not render protected content until this
 * endpoint responds with 200 — client-side checks alone are not a security
 * boundary.
 */
router.get("/auth/check", async (req, res) => {
  const { userId } = getAuth(req);

  if (!userId) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    const user = await clerkBackend.users.getUser(userId);

    const emails = user.emailAddresses.map((e) =>
      e.emailAddress.toLowerCase(),
    );

    const allowed = emails.some((email) =>
      ALLOWED_DOMAINS.some((domain) => email.endsWith(domain)),
    );

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
