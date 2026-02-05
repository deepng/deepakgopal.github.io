/**
 * RSS Feed generator utility
 * This will be expanded when actual blog posts are added
 */

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
};

/**
 * Generate an RSS feed XML string from blog posts
 */
export function generateRSSFeed(posts: BlogPost[]) {
  const baseUrl = 'https://deepakgopal.github.io';
  const feedUrl = `${baseUrl}/api/rss`;

  const rssItems = posts.map((post) => {
    const pubDate = new Date(post.date).toUTCString();
    const postLink = `${baseUrl}/blog/${post.slug}`;

    return `
  <item>
    <title>${escapeXml(post.title)}</title>
    <link>${postLink}</link>
    <guid isPermaLink="true">${postLink}</guid>
    <pubDate>${pubDate}</pubDate>
    <description>${escapeXml(post.excerpt)}</description>
    <author>deepkelsa@gmail.com (${escapeXml(post.author)})</author>
  </item>`;
  }).join('');

  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Deepak Gopal's Blog</title>
  <link>${baseUrl}/blog</link>
  <description>Thoughts, insights, and experiences from my journey in technology leadership</description>
  <language>en</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
  ${rssItems}
</channel>
</rss>`;
}

/**
 * Escape XML special characters
 */
function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}