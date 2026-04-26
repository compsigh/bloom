import Image from "next/image"
import styles from "./Landscape.module.css"

export function Landscape({ children }: { children?: React.ReactNode }) {
  return (
    <div className={styles.landscape}>
      <Image
        className={styles.background}
        src="/animations/Landscape-Day.gif"
        alt="BLOOM landscape"
        width={3840}
        height={2160}
        loading="eager"
        unoptimized
      />
      <Image
        className={`${styles.background} ${styles.night}`}
        src="/animations/Landscape-Night.gif"
        alt="BLOOM landscape"
        width={3840}
        height={2160}
        loading="eager"
        unoptimized
      />
      {children && <div className={styles.content}>{children}</div>}
      <div className={styles.overlay} />
    </div>
  )
}
