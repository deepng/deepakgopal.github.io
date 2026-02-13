#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// This script generates a static RSS feed file during the build process
// It doesn't rely on API routes which can be problematic with static exports

// We're using the current working directory approach so we don't need __filename or __dirname

function generateRSSFeed() {
  // Since we don't have actual blog posts yet, we'll create an empty RSS feed
  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Deepak Gopal's Blog</title>
  <link>https://deepakgopal.github.io/blog</link>
  <description>Thoughts, insights, and experiences from my journey in technology leadership</description>
  <language>en</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  <atom:link href="https://deepng.github.io/deepakgopal.github.io/rss.xml" rel="self" type="application/rss+xml" />
  <!-- Blog posts will appear here when added -->
</channel>
</rss>`;

  // Ensure the public directory exists
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write the RSS feed to the public directory
  fs.writeFileSync(path.join(publicDir, 'rss.xml'), xml);
  console.log('RSS feed generated at public/rss.xml');
}

// Run the generator
generateRSSFeed();