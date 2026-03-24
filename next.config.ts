import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio-website',
  assetPrefix: '/portfolio-website',
};

export default nextConfig;
