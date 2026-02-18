import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
    cssChunking: true,
    optimizePackageImports: ["framer-motion"],
  },
};

export default nextConfig;
