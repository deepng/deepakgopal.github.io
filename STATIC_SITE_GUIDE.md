# Static Website Setup Guide

## Current Setup Overview

Your repository is currently set up with a Next.js project configured for static site generation. This is evident from the `output: 'export'` setting in your `next.config.ts` file. This is a great foundation for a personal profile site as it allows you to:

1. Use React components for building UI
2. Leverage Next.js's file-based routing
3. Generate static HTML files that can be hosted on GitHub Pages

## How to Build and Deploy

### Building the Static Site

1. To build your static site, run:
   ```bash
   npm run build
   ```

2. This will generate static HTML files in the `out` directory (based on your Next.js configuration)

3. These files can be directly deployed to GitHub Pages

### GitHub Pages Deployment

Since you mentioned you have a gh-pages branch, you can:

1. Push the contents of the `out` directory to the gh-pages branch
2. Set up GitHub Pages to serve from this branch

You can automate this with a GitHub Action workflow:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: out
          branch: gh-pages
```

Save this as `.github/workflows/deploy.yml` to enable automatic deployment.

## Site Structure and Customization

Your site currently has:
- A main page (`app/page.tsx`)
- A blog section (`app/blog/page.tsx`)
- A profile section (`app/profile/page.tsx`)

### Customizing Content

#### 1. Main Page

Edit `app/page.tsx` to customize your homepage. Currently, it has a template structure with:
- Next.js logo
- A heading with "Deepak Gopal profile"
- Some template text and links

Replace these with your own content:
- Personal introduction
- Links to your projects/work
- Contact information

#### 2. Profile Page

Edit `app/profile/page.tsx` to add detailed information about yourself:
- Professional experience
- Skills
- Education
- Projects

#### 3. Blog Page

Edit `app/blog/page.tsx` to create a blog listing page. You can:
- Create individual blog posts as separate files in the `app/blog` directory
- Use dynamic routes for blog posts (e.g., `app/blog/[slug]/page.tsx`)

### Adding Navigation

Create a navigation component to link between pages:

1. Create a new file `components/Navigation.tsx`:
```tsx
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="p-4 bg-zinc-100 dark:bg-zinc-900">
      <ul className="flex space-x-4 justify-center">
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
    </nav>
  );
}
```

2. Add this to your layouts (e.g., in `app/layout.tsx`):
```tsx
import Navigation from '../components/Navigation';

// Inside your layout component:
<body>
  <Navigation />
  {children}
</body>
```

### Styling

Your project is set up with Tailwind CSS. You can:

1. Use Tailwind classes directly in your components
2. Customize the theme in `app/globals.css`
3. Add custom CSS as needed

## Adding New Pages

To add a new page:

1. Create a new directory in the `app` folder (e.g., `app/projects/`)
2. Add a `page.tsx` file with your content
3. Optionally add a `layout.tsx` if you need a specific layout

Example for a projects page:
```tsx
// app/projects/page.tsx
export default function ProjectsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Project cards */}
        <div className="border p-4 rounded">
          <h2 className="text-xl font-semibold">Project 1</h2>
          <p>Description of project 1</p>
        </div>
        <div className="border p-4 rounded">
          <h2 className="text-xl font-semibold">Project 2</h2>
          <p>Description of project 2</p>
        </div>
      </div>
    </div>
  );
}
```

## Adding Assets

1. Place images, PDFs, and other static files in the `public` directory
2. Reference them in your components:
   ```tsx
   <img src="/profile-photo.jpg" alt="Deepak Gopal" />
   ```

## SEO Optimization

Next.js provides built-in SEO capabilities:

1. Edit the metadata in `app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: "Deepak Gopal - Personal Website",
  description: "Professional profile and portfolio of Deepak Gopal",
};
```

2. Add page-specific metadata in individual page files:
```tsx
// In app/blog/page.tsx
export const metadata: Metadata = {
  title: "Blog | Deepak Gopal",
  description: "Articles and thoughts by Deepak Gopal",
};
```

## Next Steps

1. **Personalize Content**: Replace template content with your information
2. **Add Projects**: Showcase your work with descriptions and links
3. **Create Blog Posts**: Start writing content for your blog
4. **Customize Design**: Adjust colors, typography, and layout to match your style
5. **Add Analytics**: Consider adding Google Analytics or similar tools
6. **Set Up Custom Domain**: If you have a custom domain, configure it in GitHub Pages settings

## Advanced Customizations

### Adding a Contact Form

You can add a contact form using a service like Formspree:

```tsx
export default function ContactForm() {
  return (
    <form action="https://formspree.io/f/your-form-id" method="POST" className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">Name</label>
        <input type="text" id="name" name="name" required className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">Email</label>
        <input type="email" id="email" name="email" required className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2">Message</label>
        <textarea id="message" name="message" rows={4} required className="w-full p-2 border rounded"></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send Message</button>
    </form>
  );
}
```

### Adding Dark Mode Toggle

```tsx
'use client';

import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-800"
    >
      {darkMode ? '🌙' : '☀️'}
    </button>
  );
}
```

Add this component to your navigation or layout.

## Conclusion

Your Next.js setup is already well-configured for static site generation. By following this guide, you can customize and extend your personal website to showcase your profile effectively. The static site approach ensures fast loading times and easy hosting on GitHub Pages.