"use client"

import { signIn } from "next-auth/react"
import { Button } from "@/components/Button"

export function SignInButton() {
  return (
    <Button onClick={() => signIn("google", { callbackUrl: "/dashboard" })}>
      Register for BLOOM
    </Button>
  )
}
