import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import React from 'react'; // Import React

const mondwest = localFont({ src: '../public/PPMondwest-Regular.otf', variable: '--font-mondwest' })
const daydream = localFont({ src: '../public/Daydream.ttf', variable: '--font-daydream' })

export const metadata: Metadata = {
  title: "BLOOM",
  description: "The Spring 2025 hackathon for the arts & sciences, hosted by compsigh — the social computer science club at the University of San Francisco for meeting cool people && building cool things",
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
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mondwest.variable} ${daydream.variable}`}>
        {children}
      </body>
    </html>
  );
}
