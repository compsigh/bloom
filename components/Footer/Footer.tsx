import Image from "next/image"

import Cottage from "@/public/animations/Cottage.gif"

import styles from "./Footer.module.css"

export function Footer() {
  return (
    <>
      <footer id={styles.footer}>
        <Image
          src={Cottage}
          alt="An animation of a compsigh cottage amidst a field of flowers. A cat is sleeping on the roof. Puffs of smoke rise from the chimney. The clouds and flowers gently move."
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto"
          }}
        />
      </footer>
    </>
  )
}
