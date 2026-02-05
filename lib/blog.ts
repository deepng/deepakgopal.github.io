/**
 * Blog data and utility functions
 * This will be expanded when actual blog posts are added
 */

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  readTime: string;
};

// This is a placeholder for future blog post storage
// It will be empty until actual blog posts are added
export const blogPosts: BlogPost[] = [];

/**
 * Get all blog posts
 */
export function getAllPosts(): BlogPost[] {
  return blogPosts;
}

/**
 * Get a blog post by slug
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

/**
 * Instructions for adding a new blog post:
 *
 * 1. Create a markdown file in the /content/blog directory
 * 2. Add frontmatter with title, date, excerpt, etc.
 * 3. Write your blog post content in markdown
 * 4. Import the markdown file and add it to the blogPosts array
 * 5. The RSS feed will automatically update
 */