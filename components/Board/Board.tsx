import styles from "./Board.module.css"

export function Board({
  children,
  columns = 3
}: {
  children: React.ReactNode
  columns?: number
}) {
  return (
    <div
      className={styles.board}
      style={{ "--columns": columns } as React.CSSProperties}
    >
      {children}
    </div>
  )
}
