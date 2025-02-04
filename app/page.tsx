import Link from "next/link"
import { Button } from "@/components/Button"

import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1 id={styles.title}>BLOOM</h1>
        <p className={styles.subtitle}>Feb. 28 – Mar. 2</p>
        <p className={styles.subtitle}>Social Hive</p>
      </div>
      <Button
        destination="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20250228T180000/20250302T160000&ctz=America/Los_Angeles&text=BLOOM+Hackathon&location=Social+Hive&details=The+hackathon+for+the+arts+%26+sciences,+join+compsigh+from+February+28th+%E2%80%93+March+2nd+for+our+first-ever+Spring+hackathon:+BLOOM.+Grab+a+few+friends+%E2%80%94+or+meet+some+new+ones+at+our+pre-hackathon+social!+%E2%80%94+and+create+that+thing+you%27ve+always+wanted+to.+Web+apps,+research+papers,+open+source+contributions,+documentaries,+music+%E2%80%94+all+kinds+of+projects+from+all+walks+of+creative+life+are+welcome!+Make+something+human+with+us.+Go+to+https://bloom.build.">
          Add to Google Calendar
      </Button>
      <div className={styles.socials}>
        <Link
          href="https://discord.gg/compsigh"
          className={styles.social}
        >
          Discord
        </Link>
        <Link
          href="https://instagram.com/compsigh.club"
          className={styles.social}
        >
          Instagram
        </Link>
        <Link
          href="https://compsigh.club"
          className={styles.social}
        >
          Website
        </Link>
      </div>
    </div>
  )
}

