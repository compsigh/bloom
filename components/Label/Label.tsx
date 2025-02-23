import styles from "./Label.module.css"

export function Label({ text }: { text: string }) {
  return (
    <>
      <span className={styles.label}>
        {text}
      </span>
    </>
  )
}
