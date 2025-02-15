import Link from "next/link"
import Image from "next/image"
// import { Game } from "@/components/Game"
import { Button } from "@/components/Button"

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

        <div className={styles.faq}>
          <details className={styles.faq} open>
            <summary>What is BLOOM?</summary>
            <p>BLOOM is the interdisciplinary Spring 2025 hackathon hosted by <Link href="https://compsigh.club">compsigh</Link>, the social computer science club at USF for meeting cool people &amp;&amp; building cool things.</p>
            <p>BLOOM is all about personal project exploration. A low-stakes, high-quality playground for ideas. Grab a few friends and create that thing you&apos;ve always wanted to. All kinds of projects from all walks of scientific &amp; creative life are welcome.</p>
          </details>
          <details className={styles.faq}>
            <summary>What is a hackathon?</summary>
            <p>A hackathon is a (typically) weekend-long event where you start a project with your team, get as far as you can, and present to a set of judges.</p>
            <p>These are usually gatekept to computer science students. We believe the most interesting projects come at the intersection of technology and other walks of scientific &amp; creative life. With BLOOM, we really want to open this opportunity up to everyone.</p>
          </details>
          <details className={styles.faq}>
            <summary>Can/should I attend?</summary>
            <p>BLOOM is open to any and all USF students.</p>
            <p>The event is beginner-friendly.</p>
            <p>Undergraduates, especially freshmen and sophomores, as well as students from the College of Arts &amp; Sciences and the School of Management, are highly encouraged to join!</p>
            <p>There are no registration deadlines — show up whenever, and present on Sunday.</p>
          </details>
          <details className={styles.faq}>
            <summary>What can I make?</summary>
            <p>We believe the most interesting projects come at the intersection of technology and other walks of scientific &amp; creative life.</p>
            <p>We&apos;d love to see the thing you wanna make: software, research papers, open-source contributions, documentaries, music.</p>
            <p>One twist, though: make something unrelated to generative AI. Make something human. (Feel free to use AI tools; it&apos;s just the project itself that can&apos;t be related.)</p>
          </details>
          <details className={styles.faq}>
            <summary>What&apos;s the difference between BLOOM and DonsHack?</summary>
            <p>DonsHack is the annual Spring hackathon hosted by our friends at ACM &amp; WiT, two other computer science clubs at USF.</p>
            <p>We consider our hackathons to be smaller-scale, lower-stakes playgrounds for ideas and personal project exploration. Dons Hack is a great arena to test those ideas at a higher level, amongst industry professionals and with a specific theme like ed-tech.</p>
          </details>
          <details className={styles.faq}>
            <summary>What&apos;s the difference between BLOOM and DEPLOY?</summary>
            <p><Link href="https://deploy.compsigh.club">DEPLOY</Link> is compsigh&apos;s annual Fall hackathon.</p>
            <p>Whereas DEPLOY has had defined evaluation criteria, and has largely rewarded technical skill, BLOOM has a broad range of welcome projects, and is ultimately a showcase of what happens at the intersection of technology and other walks of scientific &amp; creative life.</p>
          </details>
        </div>

        <div style={{ textAlign: "center" }}>
          <p>We&apos;re updating this page regularly with more info</p>
          <p>Last updated on Thursday, February 13th</p>
          <p>Stay tuned:</p>
        </div>

        {/* <div className={styles.content}>
          <div className={styles.icon}>
            <Image
              src={"/animations/Hand.gif"}
              fill
              alt=""
            />
          </div>
          <div className={styles.game}>
            <Game />
          </div>
        </div> */}

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
