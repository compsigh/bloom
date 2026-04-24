import Image from "next/image"
import { Game } from "@/components/Game"
import { Board } from "@/components/Board"
import { Label } from "@/components/Label"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Mention } from "@/components/Mention"
import { Picture } from "@/components/Picture"
import { Landscape } from "@/components/Landscape"
import { LinkButton } from "@/components/LinkButton"

import {
  HowAreProjectsJudged,
  WhatCanIMake,
  IsThisAHackathon,
  WhatIsBLOOM,
  WhatsInItForMe,
  WhatsOnTheAgenda
} from "@/components/Info"

import styles from "./page.module.css"

const pics = [
  { slug: "crts-prep", caption: "crts prepping their demo" },
  { slug: "crts-win", caption: "crts wins first place" },
  { slug: "demo-day", caption: "Friends on demo day" },
  { slug: "leetrizz", caption: "Faadil demos LeetRizz" },
  { slug: "opening-night", caption: "Friends at opening night" },
  { slug: "synesthesia", caption: "Kiana demos Synesthesia" }
]

const leftPics = pics.slice(0, 3)
const rightPics = pics.slice(3)

function PicColumn({ slice }: { slice: typeof pics }) {
  return (
    <Board columns={1}>
      {slice.map(({ slug, caption }) => (
        <Picture
          key={slug}
          caption={caption}
          hover={`/assets/pics-from-2025/${slug}.jpeg`}
        >
          <Image
            src={`/assets/pics-from-2025-pixelated/${slug}.png`}
            alt={caption}
            width={1280}
            height={854}
          />
        </Picture>
      ))}
    </Board>
  )
}

export default function Home() {
  return (
    <main tabIndex={-1}>
      <Landscape>
        <Header />
      </Landscape>
      <div className={styles.container}>
        <div className={styles["three-col"]}>
          <div className={styles.left}>
            <PicColumn slice={leftPics} />
          </div>
          <div className={styles["middle-col"]}>
            <div className={styles.socials}>
              <LinkButton href="/agenda">Agenda</LinkButton>
              <LinkButton href="https://instagram.com/compsigh.club">
                Instagram
              </LinkButton>
              <LinkButton href="https://discord.gg/compsigh">
                Discord
              </LinkButton>
            </div>

            <div className={styles.attributions}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <Mention
                        avatar="/avatars/faadil.jpeg"
                        name="Faadil Shaik"
                        link="https://linkedin.com/in/faadil-shaik"
                      />
                    </td>
                    <td>
                      <Label text="Class of 2026" />
                    </td>
                    <td>
                      <Label text="Host" />
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
                      <Label text="Art && animation" />
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
                      <Label text="Art && animation" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Mention
                        avatar="/avatars/z.jpeg"
                        name="Zaylen Moore"
                        link="https://discord.com/channels/@me/1287531438996197458"
                      />
                    </td>
                    <td>
                      <Label text="Class of 2028" />
                    </td>
                    <td>
                      <Label text="Outreach" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Mention
                        avatar="/avatars/ash.jpeg"
                        name="Ash Li"
                        link="https://ashilated.net"
                      />
                    </td>
                    <td>
                      <Label text="Class of 2029" />
                    </td>
                    <td>
                      <Label text="Outreach" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Mention
                        avatar="/avatars/emi.jpeg"
                        name="Emily Johnson"
                        link="https://instagram.com/ohemgeeemi"
                      />
                    </td>
                    <td>
                      <Label text="Class of 2028" />
                    </td>
                    <td>
                      <Label text="Outreach" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Mention
                        avatar="/avatars/sam.jpeg"
                        name="Sam Simmons"
                        link="https://wordbunny.app"
                      />
                    </td>
                    <td>
                      <Label text="Class of 2026" />
                    </td>
                    <td>
                      <Label text="Outreach" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Mention
                        avatar="/avatars/nora.jpg"
                        name="Nora Kravets"
                        link="https://norakravets.com"
                      />
                    </td>
                    <td>
                      <Label text="Class of 2027" />
                    </td>
                    <td>
                      <Label text="Mocktails" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Mention
                        avatar="/avatars/geneva.jpg"
                        name="Geneva Tovar"
                        link="https://linkedin.com/in/genevatovar"
                      />
                    </td>
                    <td>
                      <Label text="Class of 2027" />
                    </td>
                    <td>
                      <Label text="Mocktails" />
                    </td>
                  </tr>
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
                      <Label text="Trophies" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Mention
                        avatar="/avatars/edward.jpeg"
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
          </div>
          <div className={styles.right}>
            <PicColumn slice={rightPics} />
          </div>
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
            <summary>Is this a hackathon?</summary>
            <IsThisAHackathon />
          </details>
          <details className={styles.faq}>
            <summary>What can I make?</summary>
            <WhatCanIMake />
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
            <summary>How are projects judged?</summary>
            <HowAreProjectsJudged />
          </details>
        </div>
        <Footer />
      </div>
    </main>
  )
}
