import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>BLOOM</h1>
      <div className={styles.buttonWrapper}>
      </div>
      <div className={styles.socialLinks}>
        <a
          href="https://discord.gg/compsigh"
          className={styles.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord
        </a>
        <a
          href="https://www.instagram.com/compsigh.club/"
          className={styles.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a href="https://compsigh.club/" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
          Website
        </a>
      </div>
    </div>
  )
}

