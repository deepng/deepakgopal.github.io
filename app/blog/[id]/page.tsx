import Link from 'next/link';
import { notFound } from 'next/navigation';

// Sample blog posts data - in a real application, this would come from a database or CMS
const blogPosts = [
    {
        id: "1",
        title: "Getting Started with Next.js",
        date: "January 15, 2026",
        content: `
# Getting Started with Next.js

Next.js is a powerful React framework that makes building web applications simple and efficient. In this post, we&apos;ll explore the basics of Next.js and how to set up your first project.

## What is Next.js?

Next.js is a React framework that enables functionality such as server-side rendering, static site generation, and API routes. It provides a great developer experience with features like fast refresh and file-based routing.

## Setting Up Your First Next.js Project

To create a new Next.js app, run the following command:

\`\`\`bash
npx create-next-app@latest my-next-app
\`\`\`

This will create a new Next.js project with all the necessary configurations.

## File-Based Routing

Next.js uses a file-based routing system. Simply create a file in the \`pages\` directory (or \`app\` directory for the App Router), and it will automatically become a route.

## Building and Deploying

To build your Next.js app for production, run:

\`\`\`bash
npm run build
\`\`\`

This will generate optimized production files that you can deploy to any hosting platform.

## Conclusion

Next.js simplifies React development by providing a structured framework with powerful features out of the box. It&apos;s an excellent choice for building modern web applications.
        `,
        author: "Deepak Gopal",
        category: "Web Development",
        readTime: "5 min read"
    },
    {
        id: "2",
        title: "The Power of Static Site Generation",
        date: "December 20, 2025",
        content: `
# The Power of Static Site Generation

Static Site Generation (SSG) has become increasingly popular for building fast, secure websites. Learn why SSG is making a comeback and how it can benefit your projects.

## What is Static Site Generation?

Static Site Generation is a technique where HTML pages are generated at build time rather than at request time. This means that when a user visits your website, they receive pre-rendered HTML files instead of waiting for the server to generate them on the fly.

## Benefits of Static Site Generation

### 1. Performance

Static sites are incredibly fast because they don&apos;t require server processing time for each request. The HTML is already generated and can be served directly from a CDN.

### 2. Security

With no server-side code execution and no database, static sites have a smaller attack surface, making them more secure.

### 3. Scalability

Static sites can handle massive traffic spikes with ease since they&apos;re just serving static files.

### 4. Developer Experience

Modern static site generators like Next.js provide an excellent developer experience with hot reloading, simple deployment, and a familiar React-based development environment.

## When to Use Static Site Generation

Static site generation is ideal for:

- Blogs and content-focused websites
- Documentation sites
- Personal portfolios
- Marketing websites
- E-commerce product pages

## Conclusion

Static site generation combines the best of both worlds: the performance and security of static HTML with the developer experience of modern JavaScript frameworks. It&apos;s a powerful approach for building websites that are fast, secure, and easy to maintain.
        `,
        author: "Deepak Gopal",
        category: "Web Development",
        readTime: "7 min read"
    },
];

// This function generates the static paths for all blog posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        id: post.id,
    }));
}

export default function BlogPost({ params }: { params: { id: string } }) {
    // Find the post with the matching ID
    const post = blogPosts.find(p => p.id === params.id);
    
    // If no post is found, return a 404 page
    if (!post) {
        notFound();
    }

    return (
        <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="text-blue-600 hover:underline mb-8 inline-block">
                ← Back to Blog
            </Link>
            
            <article className="prose prose-lg dark:prose-invert max-w-none">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                    <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span>By {post.author}</span>
                    </div>
                </div>
                
                <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }} />
            </article>
            
            <div className="border-t border-zinc-200 dark:border-zinc-800 mt-12 pt-8">
                <h3 className="text-xl font-bold mb-4">Share this post</h3>
                <div className="flex gap-4">
                    <button className="p-2 bg-blue-600 text-white rounded-full">
                        <span className="sr-only">Share on Twitter</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                    </button>
                    <button className="p-2 bg-blue-800 text-white rounded-full">
                        <span className="sr-only">Share on Facebook</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <button className="p-2 bg-blue-500 text-white rounded-full">
                        <span className="sr-only">Share on LinkedIn</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}