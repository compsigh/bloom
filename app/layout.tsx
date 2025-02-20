import type { Metadata } from "next"
import localFont from "next/font/local"

import { Analytics } from "@vercel/analytics/react"
import { VercelToolbar } from "@vercel/toolbar/next"

import "./globals.css"

const Mondwest = localFont({
  src: "../public/fonts/PPMondwest-Regular.otf",
  variable: "--font-mondwest"
})

const Daydream = localFont({
  src: "../public/fonts/Daydream.ttf",
  variable: "--font-daydream"
})

const iAWriterMono = localFont({
  src: [
    {
      path: "../public/fonts/iAWriterMonoV.ttf",
      style: "normal"
    },
    {
      path: "../public/fonts/iAWriterMonoV-Italic.ttf",
      style: "italic"
    }
  ],
  variable: "--font-ia-writer-mono"
})

const DepartureMono = localFont({
  src: "../public/fonts/DepartureMono-Regular.woff2",
  variable: "--font-departure-mono"
})

let metadataBase: URL
if (process.env.VERCEL_URL) metadataBase = new URL('https://bloom.build')
else metadataBase = new URL(`http://localhost:${process.env.PORT || 3000}`)

export const metadata: Metadata = {
  metadataBase,
  title: "BLOOM",
  description: "The Spring 2025 hackathon for the arts & sciences, hosted by compsigh — the social computer science club at the University of San Francisco for meeting cool people & building cool things",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/icons/favicon-light.svg"
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/icons/favicon-dark.svg"
      },
    ]
  },
  openGraph: {
    images: "/og.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const shouldInjectToolbar = process.env.NODE_ENV === "development"
  return (
    <html lang="en">
      <body className={`${Mondwest.variable} ${Daydream.variable} ${iAWriterMono.variable} ${DepartureMono.variable}`}>
        {children}
        {shouldInjectToolbar && <VercelToolbar />}
        <Analytics />
      </body>
    </html>
  );
}
