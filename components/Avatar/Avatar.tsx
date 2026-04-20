import Image from "next/image"

import styles from "./Avatar.module.css"

type AvatarProps = {
  src: string
  alt?: string
  size?: number
}

export function Avatar({ src, alt = "", size = 20 }: AvatarProps) {
  return (
    <Image
      className={styles.avatar}
      src={src}
      alt={alt}
      width={size}
      height={size}
    />
  )
}
