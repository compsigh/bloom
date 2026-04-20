import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { syncRegistrant } from "@/functions/notion"
import type { NextAuthConfig, Session } from "next-auth"

type GoogleProfile = {
  sub: string
  name?: string
  given_name?: string
  family_name?: string
  email?: string
  picture?: string
}

if (!process.env.GOOGLE_CLIENT_ID) {
  throw new Error("Missing env var GOOGLE_CLIENT_ID")
}
if (!process.env.GOOGLE_CLIENT_SECRET) {
  throw new Error("Missing env var GOOGLE_CLIENT_SECRET")
}
if (!process.env.NEXTAUTH_SECRET) {
  throw new Error("Missing env var NEXTAUTH_SECRET")
}

const authConfig: NextAuthConfig = {
  pages: {
    error: "/"
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
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
    async signIn({ profile }) {
      if (profile) {
        const p = profile as GoogleProfile
        if (p.sub && p.email && p.given_name && p.family_name) {
          try {
            await syncRegistrant({
              googleId: p.sub,
              firstName: p.given_name,
              lastName: p.family_name,
              email: p.email
            })
          } catch (err) {
            console.error("[notion] registrant sync failed:", err)
          }
        }
      }
      return true
    },
    async jwt({ token, profile }) {
      if (profile) {
        token.id = profile.sub
        token.picture = profile.picture
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token.id as string
      session.user.image = token.picture
      return session
    }
  }
}

export const {
  handlers: { GET, POST },
  auth
} = NextAuth(authConfig)

export type User = {
  name: string
  email: string
}

/**
 * Checks if the current session's user is an authenticated USF account.
 * Returns a guaranteed `User` object if so, `false` otherwise.
 *
 * @export
 * @param {Session} session The current NextAuth session.
 */
export function checkAuth(session: Session | null): User | false {
  if (!session) return false
  const { user } = session
  if (!user) return false
  if (!user.email || !user.name) return false
  if (!user.email.endsWith("usfca.edu")) return false
  return {
    name: user.name,
    email: user.email
  }
}
