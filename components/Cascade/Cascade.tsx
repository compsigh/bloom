"use client"

import { useSyncExternalStore } from "react"
import { RandomReveal } from "react-random-reveal"

const subscribe = () => () => {}

export function Cascade(
  { text, duration = 2 }:
  { text: string, duration?: number }
) {
  const isLoaded = useSyncExternalStore(subscribe, () => true, () => false)
  const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?".split("")

  return isLoaded
    ?
      <span>
        <RandomReveal
          isPlaying
          characters={text}
          duration={duration}
          characterSet={CHARACTERS}
          ignoreCharacterSet={[" "]}
        />
      </span>
    : <></>
}
