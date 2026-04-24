"use client"

import { useId, useState } from "react"
import styles from "./Picture.module.css"

function hash(str: string): number {
  let h = 0
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) | 0
  }
  return h
}

const MAX_ROTATION = 8
const COLS = 24
const ROWS = 16

type Block = { col: number; row: number; order: number }

function mix(n: number): number {
  n |= 0
  n ^= n >>> 16
  n = Math.imul(n, 0x85ebca6b)
  n ^= n >>> 13
  n = Math.imul(n, 0xc2b2ae35)
  n ^= n >>> 16
  return n
}

const BLOCKS: Block[] = (() => {
  const cells = []
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      cells.push({ col: c, row: r, h: mix(c + r * COLS + 1) })
    }
  }
  cells.sort((a, b) => a.h - b.h)
  return cells.map((b, i) => ({ col: b.col, row: b.row, order: i }))
})()

export function Picture({
  children,
  hover,
  caption
}: {
  children: React.ReactNode
  hover?: string
  caption?: string
}) {
  const id = useId()
  const seed = hash(id)
  const rotation = ((seed >>> 0) % (MAX_ROTATION * 2)) - MAX_ROTATION
  const angle = (((seed >>> 8) & 0xff) / 0xff) * Math.PI * 2
  const distance = 5 + (((seed >>> 16) & 0xff) / 0xff) * 5
  const duration = 4 + (((seed >>> 24) & 0xff) / 0xff) * 4
  const delay = -((seed & 0xff) / 0xff) * duration
  const dx = Math.cos(angle) * distance
  const dy = Math.sin(angle) * distance
  const offsetX = (((mix(seed) >>> 0) & 0xff) / 0xff) * 20 - 10

  const [revealed, setRevealed] = useState(false)

  return (
    <div
      className={`${styles.picture} ${revealed ? styles.revealed : ""}`}
      onClick={() => setRevealed(true)}
      style={
        {
          "--rotation": `${rotation}deg`,
          "--offset-x": `${offsetX.toFixed(1)}px`,
          "--dx": `${dx.toFixed(1)}px`,
          "--dy": `${dy.toFixed(1)}px`,
          "--float-duration": `${duration.toFixed(1)}s`,
          "--float-delay": `${delay.toFixed(1)}s`
        } as React.CSSProperties
      }
    >
      <div className={styles.image}>
        {children}
        {hover && (
          <div
            className={styles.hover}
            style={
              {
                "--cols": COLS,
                "--rows": ROWS,
                "--total": COLS * ROWS,
                "--hover-src": `url(${hover})`
              } as React.CSSProperties
            }
          >
            {BLOCKS.map(({ col, row, order }) => (
              <div
                key={`${col}-${row}`}
                className={styles.block}
                style={
                  {
                    "--col": col,
                    "--row": row,
                    "--order": order
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
        )}
      </div>
      {caption && <p className={styles.caption}>{caption}</p>}
    </div>
  )
}
