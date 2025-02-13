"use client"

import { useState } from "react"

import { Button } from "@/components/Button"
import { TypewriterWrapper } from "@/components/TypewriterWrapper"

import styles from "./Game.module.css"

type Question = "What is this?" | "Can I attend?" | "What can I make?" | "What's the agenda?"

const whatIsThisResponse = `Come make something human with us at BLOOM — the hackathon for the arts & sciences, hosted by compsigh.
<br />
<br />
Grab a few friends — or meet some new ones at our pre-hackathon social! — and create that thing you've always wanted to. All kinds of projects from all walks of creative life are welcome!`

function Response({ question }: { question: Question }) {
  return (
    <>
      { question === "What is this?" &&
        <TypewriterWrapper
          as={'p'}
          options={{
            cursor: " [ •‿• ]",
            delay: 20,
          }}
          strings={[whatIsThisResponse]}
        />
      }
    </>
  )
}

export function Game() {
  const [seen, setSeen] = useState<Question[]>([])
  // Ramblings/plans to hold state in URL query params:
  // const pathname = usePathname()
  // const searchParams = useSearchParams()
  // const displayParam = searchParams.get('display') || ''
  // const display = displayParam.split(',').filter(Boolean)
  // const visible = display.includes(text)

  return (
    <>
      <div className={styles.feed}>
        <div className={styles.player}>
          <Button onClick={() => setSeen(["What is this?", ...seen])}>
            What is this?
          </Button>
        </div>
        <div className={styles.responses}>
          { seen.includes("What is this?") && <Response question="What is this?" /> }
        </div>
      </div>
    </>
  )
}
