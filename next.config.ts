import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = process.env.GITHUB_REPOSITORY || 'deepakgopal/deepakgopal.github.io';

// Extract repo name from the repository string
const repoName = repo.split('/')[1];

console.log('isGithubActions:', isGithubActions);
console.log('repoName:', repoName);

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only apply basePath and assetPrefix when building for GitHub Pages
  basePath: isGithubActions ? `/${repoName}` : '',
  assetPrefix: isGithubActions ? `/${repoName}/` : '',

  // Add public assets handler to ensure static assets like images work correctly
  // This helps Next.js transform image paths properly for both local and deployed environments
  experimental: {
    optimizePackageImports: ['react-icons', '@heroicons/react'],
  },

  trailingSlash: true
};

export default nextConfig;