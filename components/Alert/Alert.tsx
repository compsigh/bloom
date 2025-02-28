import styles from "./Alert.module.css"

export function Alert(
  { children }:
  { children: React.ReactNode}
) {
  return (
    <>
      <div id={styles.alert}>
        <span>!</span>
        <span>
          {children}
        </span>
        <span>!</span>
      </div>
    </>
  )
}
