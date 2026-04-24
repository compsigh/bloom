import Image from "next/image"

import CottageDay from "@/public/animations/Cottage.gif"
import CottageNight from "@/public/animations/Cottage-Color-Night.gif"

import styles from "./Footer.module.css"

export function Footer() {
  return (
    <footer id={styles.footer}>
      <div className={styles.overlay} />
      <Image
        className={styles.day}
        unoptimized
        src={CottageDay}
        alt="An animation of a compsigh cottage amidst a field of flowers. A cat is sleeping on the roof. Puffs of smoke rise from the chimney. The clouds and flowers gently move."
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto"
        }}
      />
      <Image
        className={styles.night}
        unoptimized
        src={CottageNight}
        alt="An animation of a compsigh cottage amidst a field of flowers. A cat is sleeping on the roof. Puffs of smoke rise from the chimney. The clouds and flowers gently move."
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto"
        }}
      />
    </footer>
  )
}
