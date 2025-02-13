"use client"

import { useRouter } from "next/navigation"
import type { MouseEventHandler } from "react"

import styles from "./Button.module.css"

export function Button({
  children,
  destination,
  onClick
}: {
  children: React.ReactNode
  destination?: string,
  onClick?: () => void | MouseEventHandler<HTMLButtonElement>
}) {
  let clickHandler = onClick
  if (destination)
    clickHandler = () => router.push(destination)

  const router = useRouter()
  return (
    <button
      onClick={clickHandler}
      className={styles.button}
    >
      {children}
    </button>
  )
}
