import Link from "next/link"
import Image from "next/image"

import styles from "./Mention.module.css"

export function Mention(
{
  name,
  avatar,
  link
}:
{
  name: string,
  avatar: string,
  link: string
}
) {
  return (
    <>
      <Link href={link}>
        <span className={styles.container}>
          <Image
            id={styles.avatar}
            src={avatar}
            alt=""
            width={20}
            height={20}
            className={name === "Edward Shturman" ? styles.theme : ""}
          />
          <span className={styles.name}>
            {name}
          </span>
        </span>
      </Link>
    </>
  )
}
