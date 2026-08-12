import { createClerkClient } from "@clerk/express";

/**
 * The set of email addresses permitted to access this application.
 * This is the authoritative source — both auth/check and content/data
 * enforce it server-side so client-side checks are only a UX convenience.
 */
export const ALLOWED_EMAILS = new Set([
  "afisher@salesforce.com",
  "bill.schermer@salesforce.com",
]);

const clerkBackend = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY,
});

/**
 * Returns true if the Clerk user identified by userId has at least one
 * email address on the allowlist. Throws if the Clerk API call fails.
 */
export async function isUserAllowed(userId: string): Promise<boolean> {
  const user = await clerkBackend.users.getUser(userId);
  const emails = user.emailAddresses.map((e) => e.emailAddress.toLowerCase());
  return emails.some((email) => ALLOWED_EMAILS.has(email));
}
