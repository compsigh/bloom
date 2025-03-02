import Script from "next/script"
import { Button } from "@/components/Button"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Cascade } from "@/components/Cascade"

import styles from "./Judge.module.css"

export default function Judge() {
  return (
    <>
      <main tabIndex={-1}>
        <div className={styles.container}>
          <Header />
          <Button destination="/">&lt; Back</Button>
          <div className={styles.judge}>
            <h2 className={styles.title}>
              <Cascade
                text="Evaluate projects"
                duration={0.2}
              />
            </h2>
            <div className={styles.form}>
              <Script async src="https://tally.so/widgets/embed.js" />
              <iframe
                data-tally-src="https://tally.so/embed/wb6Pr2?transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="1000"
                style={{ border: "none" }}
                title="BLOOM Project Evaluation"
              >
              </iframe>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  )
}
