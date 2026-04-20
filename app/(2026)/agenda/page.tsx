import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Cascade } from "@/components/Cascade"
import { LinkButton } from "@/components/LinkButton"

import { WhatsOnTheAgenda } from "@/components/Info"

import styles from "./Agenda.module.css"

export default function Agenda() {
  return (
    <main tabIndex={-1}>
      <div className={styles.container}>
        <Header />
        <LinkButton href="/">&lt; Back</LinkButton>
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
