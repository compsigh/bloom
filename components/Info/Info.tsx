import Link from "next/link"
import { Note } from "@/components/Note"
import { Board } from "@/components/Board"
import { Cascade } from "@/components/Cascade"
import { Animation } from "@/components/Animation"

export function WhatIsBLOOM() {
  return (
    <>
      <p>
        <Cascade
          duration={0.2}
          text="BLOOM is a celebration of passion projects, hosted by "
        />
        <Link href="https://compsigh.club">
          <Cascade duration={0.1} text="compsigh" />
        </Link>
        <Cascade
          duration={0.4}
          text=", the computer science club for meeting cool people && building cool things. All USF students are welcome!"
        />
      </p>
      <p>
        <Cascade
          duration={0.5}
          text="Grab a few friends and make the thing you've always wanted to. All kinds of projects from all walks of scientific & creative life are welcome."
        />
      </p>
      <p>
        <Cascade
          duration={0.7}
          text="Friends who went last year: BLOOM is..."
        />
      </p>
      <Board>
        <Note>
          <Cascade duration={0.7} text="Creative" />
          <Animation animation="Brain" />
        </Note>
        <Note>
          <Cascade duration={0.7} text="Friendship" />
          <Animation animation="People" />
        </Note>
        <Note>
          <Cascade duration={0.7} text="Tasty food" />
        </Note>
        <Note>
          <Cascade duration={0.7} text="Summer camp :)))" />
        </Note>
        <Note>
          <Cascade duration={0.7} text="USF's Coachella" />
        </Note>
        <Note>
          <Cascade
            duration={0.7}
            text="Building ur garden, getting ur hands dirty"
          />
        </Note>
      </Board>
    </>
  )
}

export function IsThisAHackathon() {
  return (
    <>
      <p>
        <Cascade
          duration={0.2}
          text="Yes, in the sense that this is a weekend-long event where you present something you worked on in this time."
        />
      </p>
      <p>
        <Cascade
          duration={0.4}
          text="No, in the sense that this is not a pitchfest. We are not industrymaxxing. We are not gatekeeping to highly technical backgrounds. We are here to celebrate each other && our interests."
        />
      </p>
    </>
  )
}

export function WhatsInItForMe() {
  return (
    <>
      <p>
        <Cascade duration={0.2} text="Hackathons are an incredible " />
        <strong>
          <Cascade duration={0.2} text="social, learning, and résumé" />
        </strong>
        <Cascade
          duration={0.2}
          text=" opportunity. Building cool, tangible things you can talk about helps you stand out, and makes the grind more fun."
        />
      </p>
      <p>
        <Cascade
          duration={0.4}
          text="There will also be food throughout the weekend, and prizes for the top three teams + People's Choice vote."
        />
      </p>
    </>
  )
}

export function WhatsOnTheAgenda() {
  return (
    <>
      <p>
        <Cascade
          duration={0.2}
          text="Everything happening in the Social Hive!"
        />
      </p>
      <p>
        <Cascade duration={0.2} text="Friday, April 24" />
        <br />
        <Cascade duration={0.2} text="Opening Night" />
      </p>
      <table>
        <tbody>
          <tr>
            <td style={{ width: 120 }}>
              <Cascade duration={0.4} text="05:00pm" />
            </td>
            <td>
              <Cascade duration={0.4} text="Check in && dinner" />
            </td>
          </tr>
          <tr>
            <td style={{ width: 120 }}>
              <Cascade duration={0.4} text="05:30pm" />
            </td>
            <td>
              <Cascade duration={0.4} text="Opening keynote" />
            </td>
          </tr>
          <tr>
            <td style={{ width: 120 }}>
              <Cascade duration={0.4} text="05:40pm" />
            </td>
            <td>
              <Cascade duration={0.4} text="Hacking begins!" />
            </td>
          </tr>
          <tr>
            <td style={{ width: 120 }}>
              <Cascade duration={0.4} text="05:40pm" />
            </td>
            <td>
              <Cascade
                duration={0.4}
                text="Algorave with local SF performers"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <Cascade duration={0.3} text="Saturday, April 25" />
        <br />
        <Cascade duration={0.3} text="Hack Day" />
      </p>
      <table>
        <tbody>
          <tr>
            <td style={{ width: 120 }}>
              <Cascade duration={0.5} text="11:00am" />
            </td>
            <td>
              <Cascade duration={0.5} text="Afternoon tea all day! :)" />
            </td>
          </tr>
          <tr>
            <td style={{ width: 120 }}>
              <Cascade duration={0.5} text="12:00pm" />
            </td>
            <td>
              <Cascade
                duration={0.5}
                text="Open session: share what you’re working on and where you’re stuck. Help each other! <3"
              />
            </td>
          </tr>
          <tr>
            <td style={{ width: 120 }}>
              <Cascade duration={0.5} text="01:00pm" />
            </td>
            <td>
              <Cascade
                duration={0.5}
                text="Workshop from Faadil: Turing // Einstein"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <Cascade duration={0.4} text="Sunday, April 26" />
        <br />
        <Cascade duration={0.4} text="Demo Day" />
      </p>
      <table>
        <tbody>
          <tr>
            <td style={{ width: 120 }}>
              <Cascade duration={0.6} text="11:30am" />
            </td>
            <td>
              <Cascade duration={0.6} text="Project submission deadline" />
            </td>
          </tr>
          <tr>
            <td style={{ width: 120 }}>
              <Cascade duration={0.6} text="12:00pm" />
            </td>
            <td>
              <Cascade duration={0.6} text="Check-in && lunch" />
            </td>
          </tr>
          <tr>
            <td style={{ width: 120 }}>
              <Cascade duration={0.6} text="01:00pm" />
            </td>
            <td>
              <Cascade duration={0.6} text="Demos begin" />
            </td>
          </tr>
          <tr>
            <td style={{ width: 120 }}>
              <Cascade duration={0.6} text="02:00pm" />
            </td>
            <td>
              <Cascade duration={0.6} text="Intermission" />
            </td>
          </tr>
          <tr>
            <td style={{ width: 120 }}>
              <Cascade duration={0.6} text="02:20pm" />
            </td>
            <td>
              <Cascade duration={0.6} text="Demos continue" />
            </td>
          </tr>
          <tr>
            <td style={{ width: 120 }}>
              <Cascade duration={0.6} text="04:00pm" />
            </td>
            <td>
              <Cascade
                duration={0.6}
                text="Closing keynote; results announced"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export function WhatCanIMake() {
  return (
    <>
      <p>
        <Cascade
          duration={0.2}
          text="We'd love to see the thing you wanna make: games, software, research papers, open-source contributions, documentaries, music. Make something human."
        />
      </p>
      <p>
        <Cascade
          duration={0.6}
          text="Also, brainstorming is great, but please don't start making something until after Opening Keynote on Friday, April 24th!"
        />
      </p>
    </>
  )
}

export function HowAreProjectsJudged() {
  return (
    <>
      {/* <p>On Sunday, March 2nd, your team will submit your project and you&apos;ll present in front of your peers and the judges! You&apos;ll get up to five minutes to present, then questions from the judges and audience for two minutes.</p>
      <p>You&apos;re welcome to spend your presentation time in whichever way you see fit. We highly encourage creative presentation formats!</p>
      <p>In your presentation, please make sure your team members&apos; roles in bringing the project to life are clearly articulated.</p> */}
      <p>
        <Cascade
          duration={0.2}
          text="The panel of judges at BLOOM will be comprised of creative technologists && makers of all stripes!"
        />
      </p>
      <p>
        <Cascade
          duration={0.4}
          text="Rather than evaluating projects on a typical hackathon rubric, the judges are basically running a vibe check."
        />
      </p>
      <p>
        <strong>
          <Cascade
            duration={0.6}
            text="Judges are not evaluating complexity || completeness."
          />
        </strong>
        <Cascade
          duration={0.6}
          text=" In fact, mentioning what worked, what didn't, and how your team would continue developing the project with more time, is great!"
        />
      </p>
    </>
  )
}
