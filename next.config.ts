import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol:'https',
        hostname:'gvipcyvvbsfxlqmsyyef.supabase.co'
      },
      {
        protocol:'https',
        hostname:'img.clerk.com'
      }
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
};
export default nextConfig;
