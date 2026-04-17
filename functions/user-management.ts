import type { Session } from "next-auth"

export type User = {
  name: string
  email: string
}

/** University Google Workspace / official USF mail hosts (not personal Gmail). */
export function isUsfEmail(email: string | null | undefined): boolean {
  if (!email) return false
  const lower = email.toLowerCase().trim()
  const at = lower.lastIndexOf("@")
  if (at === -1) return false
  const domain = lower.slice(at + 1)
  return domain === "usfca.edu" || domain.endsWith(".usfca.edu")
}

/**
 * Ensures the session belongs to a USF Google domain.
 * Does not persist anything; only validates the current session payload.
 */
export function checkAuth(session: Session | null): User | false {
  if (!session) return false
  const { user } = session
  if (!user) return false
  if (!user.email || !user.name) return false
  if (!isUsfEmail(user.email)) return false
  return {
    name: user.name,
    email: user.email
  }
}
