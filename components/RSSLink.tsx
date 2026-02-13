// RSS Link component
const basePath = process.env.GITHUB_ACTIONS ? '/deepakgopal.github.io' : '';


interface RSSLinkProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export default function RSSLink({ size = 'medium', className = '' }: RSSLinkProps) {
  const sizeClasses = {
    small: 'px-3 py-1 text-xs',
    medium: 'px-4 py-2 text-sm',
    large: 'px-6 py-3 text-base',
  };

  const iconSizes = {
    small: 'h-3 w-3 mr-1',
    medium: 'h-4 w-4 mr-2',
    large: 'h-5 w-5 mr-2',
  };

  return (
    <a
      href={`${basePath}/rss.xml`}
      className={`inline-flex items-center ${sizeClasses[size]} bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors ${className}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Subscribe to RSS feed"
      title="Subscribe to RSS feed"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={iconSizes[size]}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z" />
        <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1z" />
        <path d="M3 15a2 2 0 114 0 2 2 0 01-4 0z" />
      </svg>
      Subscribe via RSS
    </a>
  );
}