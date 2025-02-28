import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/Button"
import { Cascade } from "@/components/Cascade"
import { Workshop } from "@/components/Workshop"

import styles from "./Help.module.css"

export default function Help() {
  return (
    <main tabIndex={-1}>
      <div className={styles.container}>
        <Header />
        <Button destination="/">&lt; Back</Button>
        <div className={styles.help}>
          <div style={{ paddingLeft: 16 }}>
            <h2 className={styles.title}>
              <Cascade
                text="Get Help"
                duration={0.2}
              />
            </h2>
            <p
              style={{
                maxWidth: 650,
                marginBottom: 32
              }}
            >
              <Cascade
                text="Check out the workshops & office hours throughout the weekend, all happening in the Social Hive!"
                duration={0.4}
              />
            </p>
          </div>
          <Workshop
            title="What Can We Make?"
            datetime="Friday 7pm"
            description="How to come up with a sick hackathon project, and brainstorming together"
            graphic="People"
          />
          <Workshop
            title="Rust"
            datetime="Saturday 12pm"
            description="Get help with your Rust project or debugging in general"
            graphic="Crab"
          />
          <Workshop
            title="UI Design"
            datetime="Saturday 1pm"
            description="Get help with Figma, principles of design, and more"
            graphic="Palette"
          />
          <Workshop
            title="React & Next.js"
            datetime="Saturday 1pm"
            description="Get help with web dev"
            graphic="Atom"
          />
          <Workshop
            title="Making Good Presentations"
            datetime="Saturday 2pm"
            description="Learn what makes a great hackathon presentation, and get feedback on yours"
            graphic="Screen"
          />
        </div>
        <Footer />
      </div>
    </main>
  )
}
