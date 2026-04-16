import { useId } from "react"
import styles from "./Note.module.css"

function hash(str: string): number {
  let h = 0
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) | 0
  }
  return h
}

const MAX_ROTATION = 8

export function Note({ children }: { children: React.ReactNode }) {
  const id = useId()
  const rotation = (hash(id) % (MAX_ROTATION * 2)) - MAX_ROTATION

  return (
    <div
      className={styles.note}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {children}
    </div>
  )
}
