import type { NextConfig } from "next"
import { withVercelToolbar as Toolbar } from "@vercel/toolbar/plugins/next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "*.googleusercontent.com" }]
  }
}

const withVercelToolbar = Toolbar()

export default withVercelToolbar(nextConfig)
