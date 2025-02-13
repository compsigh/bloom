'use client'

import TypewriterComponent, { type Options } from 'typewriter-effect'

export function TypewriterWrapper(
  { as, options, strings, handleDone }:
  {
    as?: React.ElementType,
    options?: Partial<Options>,
    strings: string[],
    handleDone?: () => void
  }
) {
  return (
    <>
      <TypewriterComponent
        component={as}
        options={options}
        onInit={(typewriter) => {
          typewriter.start()
          strings.forEach((string, index) => {
            typewriter.typeString((index !== strings.length - 1) ? `${string} ` : string)
          })
          typewriter.callFunction(() => {
            if (handleDone) handleDone()
          })
        }}
      />
    </>
  )
}
