import type { NextConfig } from "next"
import { withVercelToolbar as Toolbar } from "@vercel/toolbar/plugins/next"

const nextConfig: NextConfig = {
  reactStrictMode: true
}

const withVercelToolbar = Toolbar()

export default withVercelToolbar(nextConfig)
