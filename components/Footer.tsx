import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Deepak Gopal</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Technology Enthusiast & Aspiring Entrepreneur 
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/profile" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://github.com/deepng" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/dgopal/" 
                    className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="https://x.com/deengg" 
                    className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-zinc-200 dark:border-zinc-800 mt-8 pt-8 text-center text-zinc-600 dark:text-zinc-400">
          <p>© {currentYear} Deepak Gopal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}