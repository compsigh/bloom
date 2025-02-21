import Link from "next/link"
import Image from "next/image"
import { Game } from "@/components/Game"
import { Alert } from "@/components/Alert"
import { Button } from "@/components/Button"

import {
  CanShouldIAttend,
  HowAreProjectsJudged,
  WhatCanIMake,
  WhatIsAHackathon,
  WhatIsBLOOM,
  WhatsInItForMe,
  WhatsOnTheAgenda,
  WhatsTheDifferenceBetweenBLOOMAndDEPLOY,
  WhatsTheDifferenceBetweenBLOOMAndDonsHack
} from "./Info"

import styles from "./page.module.css"

export default function Home() {
  return (
    <main tabIndex={-1}>
      <div className={styles.container}>
        <header id={styles.header}>
          <div className={styles.wordmark}>
            <div className={styles.logo}>
              <Image
                src={"/icons/logo.svg"}
                fill={true}
                alt="BLOOM logo"
              />
            </div>
            <h1 id={styles.title}>BLOOM</h1>
          </div>
          <p className={styles.subtitle}>
            The hackathon for the arts &amp; sciences
          </p>
          <p className={styles.subtitle}>
            Feb. 28th – Mar. 2
            <br />
            Social Hive
          </p>
        </header>

        <Alert>
          Join us for the pre-event social: food, friends, and a how-to-hackathon panel! <strong>This Friday 2/21 at 6pm in the Social Hive</strong> (first floor of Harney Science Center)
        </Alert>

        <div id={styles["game-container"]}>
          <Game />
        </div>

        <div className={styles.faq}>
          <details className={styles.faq} open>
            <summary>What is BLOOM?</summary>
            <WhatIsBLOOM />
          </details>
          <details className={styles.faq}>
            <summary>What is a hackathon?</summary>
            <WhatIsAHackathon />
          </details>
          <details className={styles.faq}>
            <summary>Can/should I attend?</summary>
            <CanShouldIAttend />
          </details>
          <details className={styles.faq}>
            <summary>What&apos;s in it for me?</summary>
            <WhatsInItForMe />
          </details>
          <details className={styles.faq}>
            <summary>What&apos;s on the agenda?</summary>
            <WhatsOnTheAgenda />
          </details>
          <details className={styles.faq}>
            <summary>What can I make?</summary>
            <WhatCanIMake />
          </details>
          <details className={styles.faq}>
            <summary>How are projects judged?</summary>
            <HowAreProjectsJudged />
          </details>
          <details className={styles.faq}>
            <summary>What&apos;s the difference between BLOOM and DonsHack?</summary>
            <WhatsTheDifferenceBetweenBLOOMAndDonsHack />
          </details>
          <details className={styles.faq}>
            <summary>What&apos;s the difference between BLOOM and DEPLOY?</summary>
            <WhatsTheDifferenceBetweenBLOOMAndDEPLOY />
          </details>
        </div>

        <div style={{ textAlign: "center" }}>
          <p>We&apos;re updating this page regularly with more info</p>
          <p>Last updated on Thursday, February 20th</p>
          <p>Stay tuned:</p>
        </div>

        <Button
          destination="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20250228T180000/20250302T160000&ctz=America/Los_Angeles&text=BLOOM+Hackathon&location=Social+Hive&details=The+hackathon+for+the+arts+%26+sciences,+join+compsigh+from+February+28th+%E2%80%93+March+2nd+for+our+first-ever+Spring+hackathon:+BLOOM.+Grab+a+few+friends+%E2%80%94+or+meet+some+new+ones+at+our+pre-hackathon+social!+%E2%80%94+and+create+that+thing+you%27ve+always+wanted+to.+Web+apps,+research+papers,+open+source+contributions,+documentaries,+music+%E2%80%94+all+kinds+of+projects+from+all+walks+of+creative+life+are+welcome!+Make+something+human+with+us.+Go+to+https://bloom.build."
        >
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
    </main>
  )
}
