import type { NextConfig } from "next"
import { withVercelToolbar as Toolbar } from "@vercel/toolbar/plugins/next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return ["/agenda", "/help", "/judge", "/vote", "/submit"].map((route) => ({
      source: route,
      destination: `/2025${route}`,
      permanent: false
    }))
  }
}

const withVercelToolbar = Toolbar()

export default withVercelToolbar(nextConfig)
