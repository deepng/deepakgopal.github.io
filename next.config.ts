import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = process.env.GITHUB_REPOSITORY || 'deepng.github.io/deepakgopal.github.io';

// // Extract repo name from the repository string
const repoName = repo.split('/')[1];

console.log('isGithubActions:', isGithubActions);
console.log('repoName:', repoName);

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages configuration
  basePath: isGithubActions ? `/${repoName}` : '',
  assetPrefix: isGithubActions ? `/${repoName}/` : '/',
  
  // trailingSlash: true
};

export default nextConfig;