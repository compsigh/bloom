import { Header } from "@/components/2025/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/Button"
import { Cascade } from "@/components/Cascade"

import { WhatsOnTheAgenda } from "@/components/2025/Info"

import styles from "./Agenda.module.css"

export default function Agenda() {
  return (
    <main tabIndex={-1}>
      <div className={styles.container}>
        <Header />
        <Button destination="/2025">&lt; Back</Button>
        <div className={styles.agenda}>
          <h2 className={styles.title}>
            <Cascade text="Agenda" duration={0.2} />
          </h2>
          <WhatsOnTheAgenda />
        </div>
        <Footer />
      </div>
    </main>
  )
}
