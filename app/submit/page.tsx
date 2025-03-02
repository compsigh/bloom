import Script from "next/script"
import { Button } from "@/components/Button"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Cascade } from "@/components/Cascade"

import styles from "./Submit.module.css"

export default function Submit() {
  return (
    <>
      <main tabIndex={-1}>
        <div className={styles.container}>
          <Header />
          <Button destination="/">&lt; Back</Button>
          <div className={styles.submit}>
            <h2 className={styles.title}>
              <Cascade
                text="Submit Project"
                duration={0.2}
              />
            </h2>
            <div className={styles.form}>
              <Script async src="https://tally.so/widgets/embed.js" />
              <iframe
                data-tally-src="https://tally.so/embed/mB2rrR?transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="1000"
                style={{ border: "none" }}
                title="BLOOM Project Submission"
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
