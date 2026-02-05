import { redirect } from 'next/navigation';

export default function BlogPost() {
    // Redirect to the main blog page since no blog posts exist yet
    redirect('/blog');
}