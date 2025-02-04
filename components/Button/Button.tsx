"use client"

import { useRouter } from "next/navigation"

import styles from "./Button.module.css"

export function Button({
  children,
  style = "primary",
  destination
}: {
  children: React.ReactNode
  type?: "link"
  style?: "primary"
  destination: string
}) {
  const router = useRouter()
  return (
    <button
      onClick={() => router.push(destination)}
      className={`${styles.button} ${styles[style]}`}
    >
      {children}
    </button>
  )
}
