import Image from "next/image"
import { Game } from "@/components/Game"
import { Header } from "@/components/Header"
import { Landscape } from "@/components/Landscape"
import { Picture } from "@/components/Picture"
import { Board } from "@/components/Board"

import styles from "./page.module.css"

const pics = [
  { slug: "crts-prep", caption: "crts gets ready for their demo" },
  { slug: "crts-win", caption: "crts wins first place" },
  { slug: "demo-day", caption: "Friends on demo day" },
  { slug: "leetrizz", caption: "Faadil demos LeetRizz" },
  { slug: "opening-night", caption: "Friends at opening night" },
  { slug: "synesthesia", caption: "Kiana demos Synesthesia" }
]

export default function New() {
  return (
    <main>
      <Landscape>
        <Header />
      </Landscape>
      <div className={styles.row}>
        <div className={styles.board}>
          <Board columns={1}>
            {pics.map(({ slug, caption }) => (
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
        </div>
        <div id={styles["game-container"]}>
          <Game />
        </div>
      </div>
    </main>
  )
}
