import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto py-20 text-center">
      <h1 className="text-3xl font-bold mb-6">Blog Post Not Found</h1>
      <p className="mb-6">The blog post you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/blog" className="text-blue-600 hover:underline">
        ← Back to Blog
      </Link>
    </div>
  );
}