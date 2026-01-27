export default function Page() {
    // Sample blog posts data - in a real application, this would come from a database or CMS
    const blogPosts = [
        {
            id: 1,
            title: "Getting Started with Next.js",
            date: "January 15, 2026",
            excerpt: "Next.js is a powerful React framework that makes building web applications simple and efficient. In this post, we'll explore the basics of Next.js and how to set up your first project.",
            category: "Web Development",
            readTime: "5 min read"
        },
        {
            id: 2,
            title: "The Power of Static Site Generation",
            date: "December 20, 2025",
            excerpt: "Static Site Generation (SSG) has become increasingly popular for building fast, secure websites. Learn why SSG is making a comeback and how it can benefit your projects.",
            category: "Web Development",
            readTime: "7 min read"
        },
        {
            id: 3,
            title: "Mastering Tailwind CSS",
            date: "November 5, 2025",
            excerpt: "Tailwind CSS is a utility-first CSS framework that allows for rapid UI development. This post covers advanced techniques and best practices for using Tailwind in your projects.",
            category: "CSS",
            readTime: "8 min read"
        },
        {
            id: 4,
            title: "Building a Personal Portfolio with Next.js",
            date: "October 12, 2025",
            excerpt: "A step-by-step guide to creating a professional portfolio website using Next.js and deploying it to GitHub Pages. Perfect for developers looking to showcase their work.",
            category: "Tutorial",
            readTime: "10 min read"
        },
        {
            id: 5,
            title: "Introduction to TypeScript",
            date: "September 28, 2025",
            excerpt: "TypeScript adds static typing to JavaScript, making your code more robust and maintainable. Learn the basics of TypeScript and how to integrate it into your projects.",
            category: "JavaScript",
            readTime: "6 min read"
        }
    ];

    return (
        <div className="max-w-4xl mx-auto">
            <section className="mb-12">
                <h1 className="text-3xl font-bold mb-2">Blog</h1>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                    Thoughts, tutorials, and insights on web development and technology.
                </p>
                
                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-8">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-full text-sm">All</span>
                    <span className="px-3 py-1 bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100 rounded-full text-sm">Web Development</span>
                    <span className="px-3 py-1 bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100 rounded-full text-sm">JavaScript</span>
                    <span className="px-3 py-1 bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100 rounded-full text-sm">CSS</span>
                    <span className="px-3 py-1 bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100 rounded-full text-sm">Tutorial</span>
                </div>
                
                {/* Blog Posts */}
                <div className="space-y-10">
                    {blogPosts.map(post => (
                        <article key={post.id} className="border-b border-zinc-200 dark:border-zinc-800 pb-10">
                            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                                <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 px-2 py-0.5 rounded text-xs">{post.category}</span>
                                <span>•</span>
                                <span>{post.date}</span>
                                <span>•</span>
                                <span>{post.readTime}</span>
                            </div>
                            <h2 className="text-2xl font-bold mb-3 hover:text-blue-600 transition-colors">
                                <a href={`/blog/${post.id}`}>{post.title}</a>
                            </h2>
                            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                                {post.excerpt}
                            </p>
                            <a href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
                                Read more →
                            </a>
                        </article>
                    ))}
                </div>
            </section>
            
            {/* Newsletter Signup */}
            <section className="bg-zinc-100 dark:bg-zinc-800 p-8 rounded-lg mb-12">
                <h2 className="text-2xl font-bold mb-4">Subscribe to the Newsletter</h2>
                <p className="mb-6">Get notified when I publish new articles. No spam, unsubscribe at any time.</p>
                <div className="flex flex-col sm:flex-row gap-2">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                        Subscribe
                    </button>
                </div>
            </section>
        </div>
    );
}