import Link from "next/link";
import Image from "next/image";
import LinkedInProfile from "@/components/view-source";

// Use an absolute path that works in both environments
const basePath = process.env.GITHUB_ACTIONS ? '/deepakgopal.github.io' : '';

export default function Page() {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-8 py-8">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">Deepak Gopal</h1>
          <h2 className="text-2xl text-zinc-700 dark:text-zinc-300 mb-6">Software Engineering and Product Owner</h2>
          <p className="text-lg mb-6">
            With 21 years of experience in building high-quality, scalable products through strong engineering leadership.
            I help teams deliver exceptional software while focusing on process excellence and continuous improvement.
          </p>
          <div className="flex gap-4">
            <Link
              href="/profile"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              View Profile
            </Link>
            <Link
              href="/blog"
              className="px-6 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Read Blog
            </Link>
          </div>
        </div>
        <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-zinc-200 dark:border-zinc-700">
          {/* Replace with your profile image */}
          <Image
            className="hover-img"
            src={LinkedInProfile()}
            alt="Deepak Gopal"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          {/* <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-4xl">
            DG
          </div> */}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-8 text-center">
          <div className="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            Exciting projects are in the works. Check back soon to see a showcase of my recent work and contributions.
          </p>
        </div>
      </section>
      
      {/* Blog Posts Section */}
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-6">Blog Posts</h2>
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-8 text-center">
          <div className="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            I&apos;m working on some insightful articles to share my knowledge and experiences about
            technology leadership, engineering practices, and professional growth.
          </p>
          <a
            href={`${basePath}/rss.xml`}
            className="inline-flex items-center px-4 py-2 text-sm bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z" />
              <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1z" />
              <path d="M3 15a2 2 0 114 0 2 2 0 01-4 0z" />
            </svg>
            Subscribe via RSS
          </a>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <p className="mb-4">
              I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zinc-700 dark:text-zinc-300" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>deepkelsa@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zinc-700 dark:text-zinc-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
                <a href="https://github.com/deepng" className="hover:underline">github.com/deepng</a>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zinc-700 dark:text-zinc-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>
          <div className="flex-shrink">
            <div className="p-6 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Connect with Me</h3>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/dgopal/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
                <a href="https://x.com/deengg" className="w-10 h-10 flex items-center justify-center bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                {/* <a href="#" className="w-10 h-10 flex items-center justify-center bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
                  <span className="sr-only">YouTube</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                  </svg>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
