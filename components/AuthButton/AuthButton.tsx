import { auth } from "@/auth"
import { Avatar } from "@/components/Avatar"
import { SignInButton } from "./SignInButton"
import { LinkButton } from "@/components/LinkButton"

import styles from "./AuthButton.module.css"

export async function AuthButton() {
  const session = await auth()

  if (session) {
    return (
      <div className={styles.container}>
        {session.user?.image && <Avatar src={session.user.image} />}
        <LinkButton href="/dashboard">Go to Dashboard</LinkButton>
      </div>
    )
  }

  return <SignInButton />
}
