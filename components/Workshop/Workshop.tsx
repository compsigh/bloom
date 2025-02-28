import {
  Animation,
  type AnimationType
} from "@/components/Animation"

import styles from "./Workshop.module.css"

type WorkshopProps = {
  title: string
  datetime: string
  description: string
  graphic: AnimationType
}

export function Workshop({
  title,
  datetime,
  description,
  graphic
}: WorkshopProps
) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.details}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.datetime}>{datetime}</p>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles["animation-container"]}>
          <Animation animation={graphic} />
        </div>
      </div>
    </>
  )
}
