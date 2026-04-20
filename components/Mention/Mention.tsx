import Link from "next/link"
import { Avatar } from "@/components/Avatar"

import styles from "./Mention.module.css"

type MentionProps = {
  name: string
  avatar: string
  link: string
}

export function Mention({ name, avatar, link }: MentionProps) {
  return (
    <Link href={link}>
      <span className={styles.container}>
        <Avatar src={avatar} />
        <span className={styles.name}>{name}</span>
      </span>
    </Link>
  )
}
