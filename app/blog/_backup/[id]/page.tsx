import { redirect } from 'next/navigation';

// Define static params to satisfy Next.js's static export requirements
export async function generateStaticParams() {
    // Since we have no blog posts yet, we return an empty array
    // This tells Next.js not to pre-render any dynamic routes
    return [];
}

export default function BlogPost() {
    // Redirect to the main blog page since no blog posts exist yet
    redirect('/blog');
}