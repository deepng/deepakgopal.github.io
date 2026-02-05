import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/blog';
import { generateRSSFeed } from '@/lib/rss';

// Configure static generation
export const dynamic = 'force-static';
export const revalidate = 86400; // Revalidate every 24 hours

// This function will generate an RSS feed for the blog
export async function GET() {
  // Get all blog posts
  const posts = getAllPosts();

  // Generate the RSS feed XML
  const xml = generateRSSFeed(posts);

  // Return the XML with the correct content type
  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    },
  });
}