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

type Message = {
  type: "question" | "response"
  content: Question | Response
}

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

function Question({ question }: { question: Question }) {
  return (
    <>
      <div className={`${styles.message} ${styles.question}`}>
        <p>{question}</p>
      </div>
    </>
  )
}

function Response({ response }: { response: Response }) {
  return (
    <>
      <div className={`${styles.message} ${styles.response}`}>
        {response.response}
      </div>
    </>
  )
}

function Message({ message }: { message: Message }) {
  if (message.type === "question") {
    return <Question question={message.content as Question} />
  }

  if (message.type === "response") {
    return <Response response={message.content as Response} />
  }

  return null
}

function MessageFeed({ messages }: { messages: Message[] }) {
  return (
    <>
      <div className={styles.messages}>
        {
          messages.map((message, index) => (
              <Message key={index} message={message} />
          ))
        }
      </div>
    </>
  )
}

function QuestionBox({
  info,
  messages,
  setMessages,
  setCurrentIcon
}: {
  info: Map<Question, Response>,
  messages: Message[],
  setMessages: (messages: Message[]) => void,
  setCurrentIcon: (icon: Icon) => void
}) {
  return (
    <>
      <div className={styles["available-questions"]}>
        {
          Array.from(info.keys()).map((question) => (
            <div
              key={question}
              style={{
                display: messages.some(
                  message => message.type === "question" && message.content === question
                )
                ? "none"
                : "block"
              }}
            >
              <Button
                onClick={() => {
                  setMessages([
                    ...messages,
                    { type: "question", content: question },
                    { type: "response", content: info.get(question)! }
                  ])
                  setCurrentIcon(info.get(question)!.icon)
                }}
              >
                {question}
              </Button>
            </div>
          ))
        }
      </div>
    </>
  )
}

export function Game() {
  const [currentIcon, setCurrentIcon] = useState<Icon>("Hand")
  const [messages, setMessages] = useState<Message[]>([])

  // Ramblings/plans to hold state in URL query params:
  // const pathname = usePathname()
  // const searchParams = useSearchParams()
  // const displayParam = searchParams.get('display') || ''
  // const display = displayParam.split(',').filter(Boolean)
  // const visible = display.includes(text)

  return (
    <>
      <div className={styles.container}>
        <Icon icon={currentIcon} />
        <div className={styles.feed}>
          <QuestionBox
            info={info}
            messages={messages}
            setMessages={setMessages}
            setCurrentIcon={setCurrentIcon}
          />
          <MessageFeed messages={messages} />
        </div>
      </div>
    </>
  )
}
