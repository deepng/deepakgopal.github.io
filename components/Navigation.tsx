import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="p-4 bg-zinc-100 dark:bg-zinc-900">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-xl font-bold mb-4 sm:mb-0">Deepak Gopal</div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link href="/profile" className="hover:underline">Profile</Link>
          </li>
          <li>
            <Link href="/blog" className="hover:underline">Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}