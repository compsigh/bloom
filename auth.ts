import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"

import { isUsfEmail } from "@/functions/user-management"

/**
 * JWT sessions only — no database adapter (no persisted user records).
 */
function emailFromGoogleProfile(profile: unknown): string | undefined {
  if (!profile || typeof profile !== "object") return undefined
  const p = profile as Record<string, unknown>
  const email = p.email
  return typeof email === "string" && email.length > 0 ? email : undefined
}

const authConfig = {
  trustHost: true,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture
        }
      }
    })
  ],
  callbacks: {
    jwt({ token, user, profile }) {
      if (user) {
        token.email = user.email ?? undefined
        token.name = user.name ?? undefined
        token.picture = user.image ?? undefined
      }
      if (!token.email) {
        const fromProfile = emailFromGoogleProfile(profile)
        if (fromProfile) token.email = fromProfile
      }
      return token
    },
    session({ session, token }) {
      if (session.user) {
        if (token.email) session.user.email = token.email as string
        if (token.name) session.user.name = token.name as string
        if (token.picture) session.user.image = token.picture as string
      }
      return session
    },
    signIn({ user, profile }) {
      const email = user?.email ?? emailFromGoogleProfile(profile)
      return typeof email === "string" && isUsfEmail(email)
    },
    authorized({ auth, request }) {
      const path = request.nextUrl.pathname
      const isJudgeRoute = path === "/judge" || path.startsWith("/judge/")
      if (!isJudgeRoute) return true
      return !!auth?.user?.email && isUsfEmail(auth.user.email)
    }
  },
  session: { strategy: "jwt" }
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)
