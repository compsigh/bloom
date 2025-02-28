import { Game } from "@/components/Game"
import { Label } from "@/components/Label"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/Button"
import { Mention } from "@/components/Mention"

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
        <Header />
        <div className={styles.socials}>
          <Button destination="https://instagram.com/compsigh.club">
            Instagram
          </Button>
          <Button destination="/agenda">
            Agenda
          </Button>
          <Button destination="https://discord.gg/compsigh">
            Discord
          </Button>
        </div>
        <div className={styles.attributions}>
          <table>
            <tbody>
              <tr>
                <td>
                  <Mention
                    avatar="/avatars/jet.png"
                    name="Jet Pham"
                    link="https://jetpham.com"
                  />
                </td>
                <td>
                  <Label text="Class of 2027" />
                </td>
                <td>
                  <Label text="Posters" />
                </td>
              </tr>
              <tr>
                <td>
                  <Mention
                    avatar="/avatars/ilce.jpeg"
                    name="Ilce Perez"
                    link="https://github.com/ispecal"
                  />
                </td>
                <td>
                  <Label text="Class of 2024" />
                </td>
                <td>
                  <Label text="Art & animation" />
                </td>
              </tr>
              <tr>
                <td>
                  <Mention
                    avatar="/avatars/jake.png"
                    name="Jake Polintan"
                    link="https://instagram.com/jakepolintanart"
                  />
                </td>
                <td>
                  <Label text="Class of 2025" />
                </td>
                <td>
                  <Label text="Art & animation" />
                </td>
              </tr>
              <tr>
                <td>
                  <Mention
                    avatar="/avatars/edward.png"
                    name="Edward Shturman"
                    link="https://edwardshturman.com"
                  />
                </td>
                <td>
                  <Label text="Class of 2025" />
                </td>
                <td>
                  <Label text="Platform" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

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
        <Footer />
      </div>
    </main>
  )
}
