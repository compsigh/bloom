import Image from "next/image"

import styles from "./Animation.module.css"

export type AnimationType
  = "Hand"
  | "People"
  | "Thinking"
  | "Trophy"
  | "Calendar"
  | "Brain"
  | "Checklist"
  | "Toolbox"
  | "Hive"
  | "Crab"
  | "Palette"
  | "Screen"
  | "Atom"

export function Animation({ animation }: { animation: AnimationType }) {
  return (
    <>
      <div className={styles.animation}>
        <Image
          src={`/animations/${animation}.gif`}
          fill
          alt={`An animated ${animation}`}
          unoptimized
        />
      </div>
    </>
  )
}
