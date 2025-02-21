import Link from "next/link"

export function WhatIsBLOOM() {
  return (
    <>
      <p>BLOOM is the interdisciplinary Spring 2025 hackathon hosted by <Link href="https://compsigh.club">compsigh</Link>, the social computer science club at USF for meeting cool people &amp; building cool things.</p>
      <p>BLOOM is all about personal project exploration. A low-stakes, high-quality playground for ideas. Grab a few friends and create that thing you&apos;ve always wanted to. All kinds of projects from all walks of scientific &amp; creative life are welcome.</p>
    </>
  )
}

export function WhatIsAHackathon() {
  return (
    <>
      <p>A hackathon is a weekend-long event where a team starts some sort of technical project or design challenge, gets as far as they can, and presents to a set of judges.</p>
      <p>These are usually gatekept to students of a technical background. We believe the most interesting projects come at the intersection of technology and other walks of scientific &amp; creative life. With BLOOM, we really want to emphasize interdisciplinary collaboration and open this opportunity up to everyone.</p>
    </>
  )
}

export function CanShouldIAttend() {
  return (
    <>
      <p>BLOOM is <strong>open to any and all USF students</strong> of teams 1–4.</p>
      <p>The event is <strong>beginner-friendly</strong>!</p>
      <p>Undergraduates, especially freshmen and sophomores, as well as students from the College of Arts &amp; Sciences and the School of Management, are highly encouraged to join!</p>
      <p>There are no registration deadlines — show up whenever, and present on Sunday with your team.</p>
    </>
  )
}

export function WhatsInItForMe() {
  return (
    <>
      <p>Hackathons are an incredible <strong>social</strong>, <strong>learning</strong>, and <strong>résumé</strong> opportunity. Building cool, tangible things with your friends you can talk about helps you stand out, and makes the grind more fun.</p>
      <p>There will also be food throughout the weekend, and prizes for the top three teams + People&apos;s Choice vote.</p>
    </>
  )
}

export function WhatsOnTheAgenda() {
  return (
    <>
      <p>Friday, February 28</p>
      <table>
        <tbody>
          <tr>
            <td style={{ width: 120 }}>06:00pm</td>
            <td>Doors open, registration &amp; check-in begins</td>
          </tr>
          <tr>
            <td style={{ width: 120 }}>06:30pm</td>
            <td>Opening keynote &amp; dinner</td>
          </tr>
          <tr>
            <td style={{ width: 120 }}>07:00pm</td>
            <td>Hacking begins</td>
          </tr>
        </tbody>
      </table>
      <p>Saturday, March 01</p>
      <table>
        <tbody>
          <tr>
            <td style={{ width: 120 }}>11:00am – 04:00pm</td>
            <td>Office hours: chill social, light lunch, and getting help/advice from organizers/other teams</td>
          </tr>
        </tbody>
      </table>
      <p>Sunday, March 02</p>
      <table>
        <tbody>
          <tr>
            <td style={{ width: 120 }}>11:30am</td>
            <td>Project submission deadline</td>
          </tr>
          <tr>
            <td style={{ width: 120 }}>12:00pm</td>
            <td>Lunch &amp; presentation day check-in begins</td>
          </tr>
          <tr>
            <td style={{ width: 120 }}>01:00pm</td>
            <td>Presentations begin</td>
          </tr>
          <tr>
            <td style={{ width: 120 }}>02:00pm</td>
            <td>Intermission</td>
          </tr>
          <tr>
            <td style={{ width: 120 }}>02:20pm</td>
            <td>Presentations continue</td>
          </tr>
          <tr>
            <td style={{ width: 120 }}>04:00pm</td>
            <td>Closing keynote; results announced</td>
          </tr>
        </tbody>
      </table>
      <p>More details shared at Opening Keynote!</p>
    </>
  )
}

export function WhatCanIMake() {
  return (
    <>
      <p>We believe the most interesting projects come at the intersection of technology and other walks of scientific &amp; creative life.</p>
      <p>We&apos;d love to see the thing you wanna make: software, research papers, open-source contributions, documentaries, music.</p>
      <p>One twist, though: make something <strong>unrelated to generative AI</strong>. Make something human. (Feel free to use AI tools; it&apos;s just the project itself that can&apos;t be related.)</p>
      <p><strong>Judges are not evaluating completeness.</strong> In fact, mentioning what worked, what didn&apos;t, how your team would continue developing the project with more time, etc. is great!</p>
      <p>Also, brainstorming is great, but please don&apos;t start making something until after Opening Keynote on Friday, February 28th!</p>
    </>
  )
}

export function HowAreProjectsJudged() {
  return (
    <>
      {/* <p>On Sunday, March 2nd, your team will submit your project and you&apos;ll present in front of your peers and the judges! You&apos;ll get up to five minutes to present, then questions from the judges and audience for two minutes.</p>
      <p>You&apos;re welcome to spend your presentation time in whichever way you see fit. We highly encourage creative presentation formats!</p>
      <p>In your presentation, please make sure your team members&apos; roles in bringing the project to life are clearly articulated.</p> */}
      <p>The panel of judges at BLOOM will be comprised of people from industry and USF alums.</p>
      <p>Rather than evaluating projects on a typical hackathon rubric — explicit problem-solving, technically complex projects, etc. — the judges are basically running a vibe check.</p>
      <p>The best projects will incorporate elements of both technology and other walks of scientific &amp; creative life.</p>
      <p><strong>Judges are not evaluating completeness.</strong> In fact, mentioning what worked, what didn&apos;t, how your team would continue developing the project with more time, etc. is great!</p>
    </>
  )
}

export function WhatsTheDifferenceBetweenBLOOMAndDonsHack() {
  return (
    <>
      <p>DonsHack is the annual Spring hackathon hosted by our friends at ACM &amp; WiT, two other computer science clubs at USF.</p>
      <p>We consider our hackathons to be smaller-scale, lower-stakes playgrounds for ideas and personal project exploration. DonsHack is a great arena to test those ideas at a higher level, amongst industry professionals and with a specific theme like ed-tech.</p>
    </>
  )
}

export function WhatsTheDifferenceBetweenBLOOMAndDEPLOY() {
  return (
    <>
      <p><Link href="https://deploy.compsigh.club">DEPLOY</Link> is compsigh&apos;s annual Fall hackathon.</p>
      <p>Whereas DEPLOY has had defined evaluation criteria, and has largely rewarded technical skill, BLOOM has a broad range of welcome projects, and is ultimately a showcase of what happens at the intersection of technology and other walks of scientific &amp; creative life.</p>
    </>
  )
}
