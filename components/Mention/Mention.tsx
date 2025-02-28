import Link from "next/link"
import Image from "next/image"

import styles from "./Mention.module.css"

type MentionProps = {
  name: string
  avatar: string
  link: string
}

export function Mention({
  name,
  avatar,
  link
}: MentionProps
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
            className={name.includes("Edward") ? styles.theme : ""}
          />
          <span className={styles.name}>
            {name}
          </span>
        </span>
      </Link>
    </>
  )
}
