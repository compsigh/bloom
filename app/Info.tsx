import Link from "next/link"
import { Cascade } from "@/components/Cascade"

export function WhatIsBLOOM() {
  return (
    <>
      <p>
        <Cascade
          duration={0.05}
          text="BLOOM is a "
        />
        <strong>
          <Cascade
            duration={0.1}
            text="beginner-friendly"
          />
        </strong>
        <Cascade
          duration={0.2}
          text=", interdisciplinary hackathon for USF students in the College of Arts & Sciences. All are welcome!"
        />
      </p>
      <p>
        <strong>
          <Cascade
            duration={0.3}
            text="Low barrier to entry:"
          />
        </strong>
        <Cascade
          duration={0.4}
          text=" no registration deadlines — come and vibe with us on Friday, and jam on your project until presentations on Sunday!"
        />
      </p>
      <p>
        <Cascade
          duration={0.5}
          text="BLOOM is all about personal project exploration. A low-stakes, high-quality playground for ideas. Grab a few friends and create that thing you've always wanted to. All kinds of projects from all walks of scientific & creative life are welcome."
        />
      </p>
    </>
  )
}

export function WhatIsAHackathon() {
  return (
    <>
      <p>
        <Cascade
          duration={0.2}
          text="A hackathon is a weekend-long event where a team starts some sort of technical project or design challenge, gets as far as they can, and presents to a set of judges."
        />
      </p>
      <p>
        <Cascade
          duration={0.4}
          text="These are usually gatekept to students of a technical background. We believe the most interesting projects come at the intersection of technology and other walks of scientific & creative life. With BLOOM, we really want to emphasize interdisciplinary collaboration and open this opportunity up to everyone."
        />
      </p>
    </>
  )
}

export function CanShouldIAttend() {
  return (
    <>
      <p>
        <Cascade
          duration={0.2}
          text="BLOOM is "
        />
        <strong>
          <Cascade
            duration={0.2}
            text="open to any and all USF students"
          />
        </strong>
        <Cascade
          duration={0.2}
          text=" of teams 1–4."
        />
      </p>
      <p>
        <Cascade
          duration={0.4}
          text="The event is "
        />
        <strong>
          <Cascade
            duration={0.4}
            text="beginner-friendly"
          />
        </strong>
        <Cascade
          duration={0.4}
          text="!"
        />
      </p>
      <p>
        <Cascade
          duration={0.6}
          text="Undergraduates, especially freshmen and sophomores, as well as students from the College of Arts & Sciences and the School of Management, are highly encouraged to join!"
        />
      </p>
      <p>
        <Cascade
          duration={0.8}
          text="There are no registration deadlines — show up whenever, and present on Sunday with your team."
        />
      </p>
      <p>
        <Cascade
          duration={1}
          text="So in short, yes!"
        />
      </p>
    </>
  )
}

export function WhatsInItForMe() {
  return (
    <>
      <p>
        <Cascade
          duration={0.2}
          text="Hackathons are an incredible "
        />
        <strong>
          <Cascade
            duration={0.2}
            text="social, learning, and résumé"
          />
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
        <Cascade
          duration={0.2}
          text="Friday, February 28"
        />
      </p>
      <table>
        <tbody>
          <tr>
            <td style={{ width: 120 }}>
              <Cascade
                duration={0.4}
                text="06:00pm"
              />
            </td>
            <td>
              <Cascade
                duration={0.4}
                text="Doors open"
              />
            </td>
          </tr>
          <tr>
            <td style={{ width: 120 }}>
              <Cascade
                duration={0.4}
                text="06:30pm"
              />
            </td>
            <td>
              <Cascade
                duration={0.4}
                text="Opening keynote & dinner"
              />
            </td>
          </tr>
          <tr>
            <td style={{ width: 120 }}>
              <Cascade
                duration={0.4}
                text="07:00pm"
              />
            </td>
            <td>
              <Cascade
                duration={0.4}
                text="Hacking begins"
              />
            </td>
          </tr>
          <tr>
            <td style={{ width: 120 }}>
              <Cascade
                duration={0.4}
                text="07:00pm"
              />
            </td>
            <td>
              <Cascade
                duration={0.4}
                text="Looking-for-team hour"
              />
            </td>
          </tr>
          <tr>
            <td style={{ width: 120 }}>
              <Cascade
                duration={0.4}
                text="07:10pm"
              />
            </td>
            <td>
              <Cascade
                duration={0.4}
                text="Workshop: What Can We Make?"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <Cascade
          duration={0.3}
          text="Saturday, March 01"
        />
      </p>
      <table>
        <tbody>
          <tr>
            <td style={{ width: 120 }}>
              <Cascade
                duration={0.5}
                text="12:00pm"
              />
            </td>
            <td>
              <Cascade
                duration={0.5}
                text="Light lunch, chill hangout, share ideas and get help from other teams"
              />
            </td>
          </tr>
          <tr>
            <td style={{ width: 120 }}>
              <Cascade
                duration={0.5}
                text="01:00pm"
              />
            </td>
            <td>
              <Cascade
                duration={0.5}
                text="Office Hours: UI Design"
              />
            </td>
          </tr>
          <tr>
            <td style={{ width: 120 }}>
              <Cascade
                duration={0.5}
                text="01:00pm"
              />
            </td>
            <td>
              <Cascade
                duration={0.5}
                text="Office Hours: React & Next.js"
              />
            </td>
          </tr>
          <tr>
            <td style={{ width: 120 }}>
              <Cascade
                duration={0.5}
                text="01:00pm"
              />
            </td>
            <td>
              <Cascade
                duration={0.5}
                text="Office Hours: Rust"
              />
            </td>
          </tr>
          <tr>
            <td style={{ width: 120 }}>
              <Cascade
                duration={0.5}
                text="02:00pm"
              />
            </td>
            <td>
              <Cascade
                duration={0.5}
                text="Workshop: Making Good Presentations"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <Cascade
          duration={0.4}
          text="Sunday, March 02"
        />
      </p>
      <table>
        <tbody>
          <tr>
            <td style={{ width: 120 }}>
              <Cascade
                duration={0.6}
                text="11:30am"
              />
            </td>
            <td>
              <Cascade
                duration={0.6}
                text="Project submission deadline"
              />
            </td>
          </tr>
          <tr>
            <td style={{ width: 120 }}>
              <Cascade
                duration={0.6}
                text="12:00pm"
              />
            </td>
            <td>
              <Cascade
                duration={0.6}
                text="Lunch & presentation day check-in begins"
              />
            </td>
          </tr>
          <tr>
            <td style={{ width: 120 }}>
              <Cascade
                duration={0.6}
                text="01:00pm"
              />
            </td>
            <td>
              <Cascade
                duration={0.6}
                text="Presentations begin"
              />
            </td>
          </tr>
          <tr>
            <td style={{ width: 120 }}>
              <Cascade
                duration={0.6}
                text="02:00pm"
              />
            </td>
            <td>
              <Cascade
                duration={0.6}
                text="Intermission"
              />
            </td>
          </tr>
          <tr>
            <td style={{ width: 120 }}>
              <Cascade
                duration={0.6}
                text="02:20pm"
              />
            </td>
            <td>
              <Cascade
                duration={0.6}
                text="Presentations continue"
              />
            </td>
          </tr>
          <tr>
            <td style={{ width: 120 }}>
              <Cascade
                duration={0.6}
                text="04:00pm"
              />
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
          text="We'd love to see the thing you wanna make: software, research papers, open-source contributions, documentaries, music."
        />
      </p>
      <p>
        <Cascade
          duration={0.4}
          text="One twist, though: make something "
        />
        <strong>
          <Cascade
            duration={0.4}
            text="unrelated to generative AI"
          />
        </strong>
        <Cascade
          duration={0.4}
          text=". Make something human. (Feel free to use AI tools; it's just the project itself that can't be related.)"
        />
      </p>
      <p>
        <Cascade
          duration={0.6}
          text="Also, brainstorming is great, but please don't start making something until after Opening Keynote on Friday, February 28th!"
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
          text="The panel of judges at BLOOM will be comprised of people from industry and USF alums."
        />
      </p>
      <p>
        <Cascade
          duration={0.4}
          text="Rather than evaluating projects on a typical hackathon rubric — explicit problem-solving, technically complex projects, etc. — the judges are basically running a vibe check."
          />
        </p>
      <p>
        <strong>
          <Cascade
            duration={0.6}
            text="Judges are not evaluating completeness."
          />
        </strong>
        <Cascade
          duration={0.6}
          text=" In fact, mentioning what worked, what didn't, how your team would continue developing the project with more time, etc. is great!"
        />
      </p>
    </>
  )
}

export function WhatsTheDifferenceBetweenBLOOMAndDonsHack() {
  return (
    <>
      <p>
        <Cascade
          duration={0.2}
          text="DonsHack is the annual Spring hackathon hosted by our friends at ACM & WiT, two other computer science clubs at USF."
        />
      </p>
      <p>
        <Cascade
          duration={0.4}
          text="We consider our hackathons to be smaller-scale, lower-stakes playgrounds for ideas and personal project exploration. DonsHack is a great arena to test those ideas at a higher level, amongst industry professionals and with a specific theme like ed-tech."
        />
      </p>
    </>
  )
}

export function WhatsTheDifferenceBetweenBLOOMAndDEPLOY() {
  return (
    <>
      <p>
        <Link href="https://deploy.compsigh.club">
          <Cascade
            duration={0.2}
            text="DEPLOY"
          />
        </Link>
        <Cascade
          duration={0.2}
          text=" is compsigh's annual Fall hackathon."
        />
      </p>
      <p>
        <Cascade
          duration={0.4}
          text="Whereas DEPLOY has had defined evaluation criteria, and has largely rewarded technical skill, BLOOM has a broad range of welcome projects, and is ultimately a showcase of what happens at the intersection of technology and other walks of scientific & creative life."
        />
      </p>
    </>
  )
}
