import { Router, type IRouter } from "express";
import { getAuth } from "@clerk/express";
import { isUserAllowed } from "../lib/allowlist";
import { navSections, pages, searchIndex } from "../data";

const router: IRouter = Router();

/**
 * GET /api/content/data
 *
 * Returns the protected briefing content (navSections, pages, searchIndex)
 * to authenticated, allowlisted users only.
 *
 * Content is intentionally NOT bundled into the frontend — it lives here so
 * it is never present in the public JavaScript that anyone can download
 * without an account.
 */
router.get("/content/data", async (req, res) => {
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

    res.json({ navSections, pages, searchIndex });
  } catch {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
