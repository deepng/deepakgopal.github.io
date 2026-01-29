import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages configuration
  basePath: '',
  assetPrefix: '',
  trailingSlash: true
};

export default nextConfig;