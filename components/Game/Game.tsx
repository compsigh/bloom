"use client"

import { JSX, useState } from "react"

import Image from "next/image"
import { Button } from "@/components/Button"

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
} from "@/app/Info"

import styles from "./Game.module.css"

type Question = "What is BLOOM?"
              | "What is a hackathon?"
              | "Can/should I attend?"
              | "What's in it for me?"
              | "What's on the agenda?"
              | "What can I make?"
              | "How are projects judged?"
              | "What's the difference between BLOOM and DonsHack?"
              | "What's the difference between BLOOM and DEPLOY?"

type Icon = "Hand"
          | "Brain"
          | "Checklist"
          | "Calendar"
          | "Toolbox"
          | "Hive"

type Response = {
  response: JSX.Element
  icon: Icon
}

const info = new Map<Question, Response>()
info.set("What is BLOOM?", {
  response: <WhatIsBLOOM />,
  icon: "Hand"
})
info.set("What is a hackathon?", {
  response: <WhatIsAHackathon />,
  icon: "Hand" // TODO: replace
})
info.set("Can/should I attend?", {
  response: <CanShouldIAttend />,
  icon: "Hand" // TODO: replace
})
info.set("What's in it for me?", {
  response: <WhatsInItForMe />,
  icon: "Hand" // TODO: replace
})
info.set("What's on the agenda?", {
  response: <WhatsOnTheAgenda />,
  icon: "Calendar"
})
info.set("What can I make?", {
  response: <WhatCanIMake />,
  icon: "Brain"
})
info.set("How are projects judged?", {
  response: <HowAreProjectsJudged />,
  icon: "Checklist"
})
info.set("What's the difference between BLOOM and DonsHack?", {
  response: <WhatsTheDifferenceBetweenBLOOMAndDonsHack />,
  icon: "Hand"
})
info.set("What's the difference between BLOOM and DEPLOY?", {
  response: <WhatsTheDifferenceBetweenBLOOMAndDEPLOY />,
  icon: "Hand"
})


function Icon({ icon }: { icon: Icon }) {
  return (
    <>
      <div className={styles.icon}>
        <Image
          src={`/animations/${icon}.gif`}
          fill
          alt=""
        />
      </div>
    </>
  )
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
        </div>
      </div>
    </>
  )
}
