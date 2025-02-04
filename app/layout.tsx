import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'

const mondwest = localFont({ src: '../public/PPMondwest-Regular.otf' })
const daydream = localFont({ src: '../public/Daydream.ttf' })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
