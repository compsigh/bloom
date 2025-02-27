import Link from "next/link"
import Image from "next/image"

import styles from "./Header.module.css"

export function Header() {
  return (
    <>
      <header id={styles.header}>
        <div id={styles.wordmark}>
          <div id={styles.logo}>
            <Image
              src={"/icons/logo.svg"}
              fill={true}
              alt="BLOOM logo"
            />
          </div>
          <h1 id={styles.title}>BLOOM</h1>
        </div>
        <p className={styles.subtitle}>
          A hackathon from <Link href="https://compsigh.club">compsigh</Link>, the social computer science club at USF for meeting cool people &amp; building cool things
        </p>
        <p className={styles.subtitle}>
          Feb. 28 – Mar. 2
          <br />
          Social Hive
        </p>
      </header>
    </>
  )
}
