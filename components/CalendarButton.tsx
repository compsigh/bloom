"use client"
import { AddToCalendarButton } from "add-to-calendar-button-react"

export default function CalendarButton() {
  return (
    <AddToCalendarButton
      name="BLOOM Hackathon"
      description="compsigh's Spring hackathon! All students are welcome to spend the weekend developing an interesting project. It'll be judged by a panel of profesors and professionals in industry."
      startDate="2025-02-28"
      startTime="18:00"
      endDate="2025-03-02"
      endTime="16:00"
      timeZone="America/Los_Angeles"
      location="Social Hive (Harney First Floor)"
      organizer="Jet Pham|jtpham9@dons.usfca.edu"
      availability="busy"
      options="'Apple','Google','iCal'"
      listStyle="overlay"
      buttonStyle="date"
      hideBackground
      lightMode="system"
      styleLight="--date-btn-background: white;
            --list-hover-text: black;
            --btn-border: white;
            --date-btn-hover-background: white;
            --date-btn-text-secondary: black;
            --btn-text: black;
            --date-btn-cal-background: black;
            --date-btn-cal-month-text: white;
            --date-btn-cal-day-text: white;
            --date-btn-text: black;
            --list-hover-background: white;
            --list-text: white;
            --btn-hover-background: black;
            --list-background: black;
            --btn-background: white;
            --btn-text: black;
            --input-background: white;
            --list-close-background: white;
            --font: daydream;
            --btn-border-radius: 0;"
      styleDark="--date-btn-background: black;
           --list-hover-text: white;
           --btn-border: black;
           --date-btn-hover-background: black;
           --date-btn-text-secondary: white;
           --btn-text: white;
           --date-btn-cal-background: white;
           --date-btn-cal-month-text: black;
           --date-btn-cal-day-text: black;
           --date-btn-text: white;
           --list-hover-background: black;
           --list-text: black;
           --btn-hover-background: white;
           --list-background: white;
           --btn-background: black;
           --btn-text: white;
           --input-background: black;
           --list-close-background: black;
           --font: daydream;
           --btn-border-radius: 0;"
    />
  )
}

