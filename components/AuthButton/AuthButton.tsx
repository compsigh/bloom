import { auth } from "@/auth"
import { SignInButton } from "./SignInButton"
import { LinkButton } from "@/components/LinkButton"

export async function AuthButton() {
  const session = await auth()

  if (session) {
    return <LinkButton href="/dashboard">Go to Dashboard</LinkButton>
  }

  return <SignInButton />
}
