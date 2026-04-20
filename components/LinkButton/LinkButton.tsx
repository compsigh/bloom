import Link from "next/link"
import type { ComponentProps } from "react"

import styles from "./LinkButton.module.css"

type LinkButtonProps = ComponentProps<typeof Link>

export function LinkButton({ className, children, ...props }: LinkButtonProps) {
  return (
    <Link
      className={`${styles.linkButton}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </Link>
  )
}
