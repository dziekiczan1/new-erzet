import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
    cssChunking: true,
    optimizePackageImports: ["framer-motion"],
  },
  output: "standalone",
};

export default nextConfig;
