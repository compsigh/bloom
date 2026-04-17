import Link from "next/link"
import { redirect } from "next/navigation"

import { auth, signOut } from "@/auth"
import { checkAuth } from "@/functions/user-management"

import styles from "./unauthorized.module.css"

export default async function UnauthorizedPage() {
  const session = await auth()
  if (checkAuth(session)) redirect("/")

  return (
    <main className={styles.main}>
      <h1>Please use a USF email</h1>
      <p>
        Judging tools require a Google account with an{" "}
        <strong>@usfca.edu</strong> email address.
      </p>
      <p>
        If you signed in with another provider or personal Gmail, sign out and
        sign in again with your university account.
      </p>
      <div className={styles.actions}>
        <form
          action={async () => {
            "use server"
            await signOut({ redirectTo: "/" })
          }}
        >
          <button type="submit" className={styles.button}>
            Sign out
          </button>
        </form>
      </div>
      <p>
        <Link href="/" className={styles.link}>
          Back home
        </Link>
      </p>
    </main>
  )
}
