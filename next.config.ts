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
  // GitHub Pages configuration
  // If repo name is username.github.io, no basePath is needed
  basePath: isGithubActions && repoName !== 'deepakgopal.github.io' ? `/${repoName}` : '',
  assetPrefix: isGithubActions && repoName !== 'deepakgopal.github.io' ? `/${repoName}/` : '',
  
  // trailingSlash: true
};

export default nextConfig;