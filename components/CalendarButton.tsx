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
      buttonStyle="flat"
      hideBackground
      lightMode="system"
    />
  )
}

