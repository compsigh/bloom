import styles from "./Board.module.css"

export function Board({
  children,
  columns = 3,
  gap = "64px"
}: {
  children: React.ReactNode
  columns?: number
  gap?: string
}) {
  return (
    <div
      className={styles.board}
      style={
        {
          "--columns": columns,
          "--board-gap": gap
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}
