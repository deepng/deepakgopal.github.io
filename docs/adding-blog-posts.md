# Adding Blog Posts

This document explains how to add blog posts to your website when you're ready to start blogging.

## Blog Infrastructure

The website has been set up with a basic blog infrastructure:

1. **RSS Feed**: Available at `/api/rss`
2. **Blog Page**: The main blog page at `/blog` shows a "Coming Soon" message
3. **Blog Data**: Blog post data management in `/lib/blog.ts`

## How to Add Your First Blog Post

When you're ready to add your first blog post:

### 1. Create the Content Directory

First, create a directory to store your blog post content:

```bash
mkdir -p content/blog
```

### 2. Create Your First Blog Post

Create a markdown file for your blog post:

```bash
touch content/blog/my-first-post.md
```

Add frontmatter and content to your blog post:

```markdown
---
title: My First Blog Post
date: '2026-03-01'
slug: my-first-post
excerpt: A brief summary of what this post is about
category: Leadership
readTime: 5 min read
---

# My First Blog Post

This is the content of my first blog post...
```

### 3. Update the Blog Data

Open `/lib/blog.ts` and add your blog post to the `blogPosts` array:

```typescript
import myFirstPostContent from '@/content/blog/my-first-post.md';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'my-first-post',
    title: 'My First Blog Post',
    date: '2026-03-01',
    excerpt: 'A brief summary of what this post is about',
    content: myFirstPostContent,
    author: 'Deepak Gopal',
    category: 'Leadership',
    readTime: '5 min read',
  },
];
```

### 4. Update the Blog Page

Once you have actual blog posts, you'll want to update the blog page to display your posts instead of the "Coming Soon" message. To do this:

1. Open `/app/blog/page.tsx`
2. Replace the "Coming Soon" section with code that lists your blog posts
3. Update the individual blog post page at `/app/blog/[id]/page.tsx` to display the post content

### 5. Add Email Subscription

When you're ready to add email subscription functionality:

1. Set up a service like Mailchimp, ConvertKit, or a custom solution
2. Replace the RSS feed section with an email subscription form
3. Connect the form to your chosen email service

## RSS Feed

The RSS feed is automatically generated from the blog posts in `/lib/blog.ts`. When you add new blog posts, the RSS feed will update automatically.

## Need Help?

If you need help with any of these steps, reach out to your web developer or refer to the Next.js documentation.