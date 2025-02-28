"use client"

import { JSX, useState } from "react"
import { useRouter } from "next/navigation"

import {
  Animation,
  type AnimationType
} from "@/components/Animation"
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

type Response = {
  response: JSX.Element
  animation: AnimationType
  unlocks: Question[]
}

const info = new Map<Question, Response>()
info.set("What is BLOOM?", {
  response: <WhatIsBLOOM />,
  animation: "Hand",
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
  animation: "People",
  unlocks: [
    "Can/should I attend?"
  ]
})
info.set("Can/should I attend?", {
  response: <CanShouldIAttend />,
  animation: "Thinking",
  unlocks: [
    "What can I make?",
    "How are projects judged?",
    "What's on the agenda?",
    "What's in it for me?"
  ]
})
info.set("What's in it for me?", {
  response: <WhatsInItForMe />,
  animation: "Trophy",
  unlocks: [
    "What's on the agenda?"
  ]
})
info.set("What's on the agenda?", {
  response: <WhatsOnTheAgenda />,
  animation: "Calendar",
  unlocks: []
})
info.set("What can I make?", {
  response: <WhatCanIMake />,
  animation: "Brain",
  unlocks: [
    "How are projects judged?"
  ]
})
info.set("How are projects judged?", {
  response: <HowAreProjectsJudged />,
  animation: "Checklist",
  unlocks: []
})
info.set("What's the difference between BLOOM and DonsHack?", {
  response: <WhatsTheDifferenceBetweenBLOOMAndDonsHack />,
  animation: "Hand",
  unlocks: []
})
info.set("What's the difference between BLOOM and DEPLOY?", {
  response: <WhatsTheDifferenceBetweenBLOOMAndDEPLOY />,
  animation: "Hand",
  unlocks: []
})

type Message = {
  type: "question" | "response"
  content: Question | Response
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
  setCurrentAnimation,
  availableQuestions,
  setAvailableQuestions
}: {
  info: Map<Question, Response>,
  messages: Message[],
  setMessages: (messages: Message[]) => void,
  setCurrentAnimation: (animation: AnimationType) => void,
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
                  setCurrentAnimation(info.get(question)!.animation)
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
  const [messages, setMessages] = useState<Message[]>([])
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>("Hand")
  const [availableQuestions, setAvailableQuestions] = useState<Question[]>(["What is BLOOM?"])

  return (
    <>
      <div className={styles.container}>
        <Animation animation={currentAnimation} />
        <div className={styles.feed}>
          <QuestionBox
            info={info}
            messages={messages}
            setMessages={setMessages}
            setCurrentAnimation={setCurrentAnimation}
            availableQuestions={availableQuestions}
            setAvailableQuestions={setAvailableQuestions}
          />
          <MessageFeed messages={messages} />
        </div>
      </div>
    </>
  )
}
