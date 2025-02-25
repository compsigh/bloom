"use client"

import { JSX, useState } from "react"
import { useRouter } from "next/navigation"

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

type Question
  = "What is BLOOM?"
  | "What is a hackathon?"
  | "Can/should I attend?"
  | "What's in it for me?"
  | "What's on the agenda?"
  | "What can I make?"
  | "How are projects judged?"
  | "What's the difference between BLOOM and DonsHack?"
  | "What's the difference between BLOOM and DEPLOY?"

type Icon
  = "Hand"
  | "People"
  | "Thinking"
  | "Trophy"
  | "Calendar"
  | "Brain"
  | "Checklist"
  | "Toolbox"
  | "Hive"

type Response = {
  response: JSX.Element
  icon: Icon
  unlocks: Question[]
}

const info = new Map<Question, Response>()
info.set("What is BLOOM?", {
  response: <WhatIsBLOOM />,
  icon: "Hand",
  unlocks: [
    "What is a hackathon?",
    "Can/should I attend?",
    "What can I make?",
    "What's the difference between BLOOM and DonsHack?",
    "What's the difference between BLOOM and DEPLOY?"
  ]
})
info.set("What is a hackathon?", {
  response: <WhatIsAHackathon />,
  icon: "People",
  unlocks: [
    "Can/should I attend?"
  ]
})
info.set("Can/should I attend?", {
  response: <CanShouldIAttend />,
  icon: "Thinking",
  unlocks: [
    "What can I make?",
    "How are projects judged?",
    "What's on the agenda?",
    "What's in it for me?"
  ]
})
info.set("What's in it for me?", {
  response: <WhatsInItForMe />,
  icon: "Trophy",
  unlocks: [
    "What's on the agenda?"
  ]
})
info.set("What's on the agenda?", {
  response: <WhatsOnTheAgenda />,
  icon: "Calendar",
  unlocks: []
})
info.set("What can I make?", {
  response: <WhatCanIMake />,
  icon: "Brain",
  unlocks: [
    "How are projects judged?"
  ]
})
info.set("How are projects judged?", {
  response: <HowAreProjectsJudged />,
  icon: "Checklist",
  unlocks: []
})
info.set("What's the difference between BLOOM and DonsHack?", {
  response: <WhatsTheDifferenceBetweenBLOOMAndDonsHack />,
  icon: "Hand",
  unlocks: []
})
info.set("What's the difference between BLOOM and DEPLOY?", {
  response: <WhatsTheDifferenceBetweenBLOOMAndDEPLOY />,
  icon: "Hand",
  unlocks: []
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
          alt={`An animated ${icon}`}
          unoptimized
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
      <div>
        {
          messages.map((message, index) => (
              <div
                key={index}
                id={(index + 1).toString()}
              >
                <Message message={message} />
              </div>
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
  setCurrentIcon,
  availableQuestions,
  setAvailableQuestions
}: {
  info: Map<Question, Response>,
  messages: Message[],
  setMessages: (messages: Message[]) => void,
  setCurrentIcon: (icon: Icon) => void,
  availableQuestions: Question[],
  setAvailableQuestions: (questions: Question[]) => void
}) {
  const router = useRouter()
  return (
    <>
      <div className={styles["available-questions"]}>
        {
          Array.from(availableQuestions).map((question) => (
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
                  setAvailableQuestions(
                    Array.from(new Set([
                      ...availableQuestions,
                      ...info.get(question)!.unlocks
                    ]))
                  )
                  router.replace(`#${(messages.length + 1).toString()}`)
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
  const [availableQuestions, setAvailableQuestions] = useState<Question[]>(["What is BLOOM?"])

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
            availableQuestions={availableQuestions}
            setAvailableQuestions={setAvailableQuestions}
          />
          <MessageFeed messages={messages} />
        </div>
      </div>
    </>
  )
}
