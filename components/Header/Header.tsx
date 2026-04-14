import Link from "next/link"
import Image from "next/image"

import styles from "./Header.module.css"

export function Header() {
  return (
    <>
      <header id={styles.header}>
        <div id={styles.wordmark}>
          <div id={styles.logo}>
            <Image src={"/icons/logo.svg"} fill={true} alt="BLOOM logo" />
          </div>
          <h1 id={styles.title}>BLOOM</h1>
        </div>
        <p className={styles.subtitle}>
          A celebration of passion projects, hosted by{" "}
          <Link href="https://compsigh.club">compsigh</Link>, the computer
          science club for meeting cool people &amp;&amp; building cool things
        </p>
        <p className={styles.subtitle}>
          Apr 24 – 26
          <br />
          Social Hive
        </p>
      </header>
    </>
  )
}
