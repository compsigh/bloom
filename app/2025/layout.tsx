import type { Metadata } from "next"

import "./globals.css"

export const metadata: Metadata = {
  openGraph: {
    images: "/og-2025.png"
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
