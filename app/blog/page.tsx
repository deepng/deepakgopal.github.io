export default function Page() {
    return (
        <div className="max-w-4xl mx-auto">
            <section className="mb-12">
                <h1 className="text-3xl font-bold mb-2">Blog</h1>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                    Thoughts, insights, and experiences from my journey in technology leadership.
                </p>

                {/* Coming Soon Section */}
                <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-16 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Blog Coming Soon</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto mb-8">
                        I&apos;m currently working on some insightful articles about engineering leadership,
                        technical excellence, team building, and product development. Stay tuned for valuable content
                        based on my 21 years of industry experience.
                    </p>
                    <div className="inline-block border border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-full px-4 py-2 font-medium">
                        Check back soon!
                    </div>
                </div>
            </section>

            {/* RSS Feed Section */}
            <section className="bg-zinc-100 dark:bg-zinc-800 p-8 rounded-lg mb-12">
                <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
                <p className="mb-6">
                    Subscribe to the RSS feed to be notified when blog posts are published.
                    A proper subscription system will be available once content is ready.
                </p>
                <a
                    href="/rss.xml"
                    className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z" />
                        <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1z" />
                        <path d="M3 15a2 2 0 114 0 2 2 0 01-4 0z" />
                    </svg>
                    Subscribe via RSS
                </a>
            </section>
        </div>
    );
}