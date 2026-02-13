// Helper function to get the correct image path prefix
function getImagePathPrefix() {
    // Check if we're running in the browser
    if (typeof window !== 'undefined') {
        // More reliable detection using hostname
        if (window.location.hostname.includes('github.io')) {
            console.log('GitHub Pages deployment detected');
            return '/deepakgopal.github.io';
        }

        // Fallback to check pathname if hostname approach doesn't work
        const baseUrl = window.location.pathname.split('/')[1];
        if (baseUrl === 'deepakgopal.github.io') {
            console.log('GitHub Pages deployment detected via pathname');
            return '/deepakgopal.github.io';
        }
    }

    // During server-side rendering or local development, use the root path
    return '';
}

export default function LinkedInProfile() {
    const prefix = getImagePathPrefix();
    return `${prefix}/images/LinkedInProfile.png`;
}

export function ProfilePic() {
    const prefix = getImagePathPrefix();
    return `${prefix}/images/ProfilePicOfficial.jpg`;
}