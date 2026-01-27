# Deepak Gopal - Personal Website

This is a personal website built with Next.js and deployed on GitHub Pages. It showcases my profile, projects, and blog posts.

## Features

- Static site generation for fast loading and SEO benefits
- Responsive design using Tailwind CSS
- Blog section with individual post pages
- Profile page with skills, experience, and education
- Dark mode support

## Getting Started

### Prerequisites

- Node.js (version 18 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/deepakgopal/deepakgopal.github.io.git
   cd deepakgopal.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `app/` - Contains all the pages and layouts using Next.js App Router
  - `page.tsx` - Homepage
  - `profile/page.tsx` - Profile page
  - `blog/page.tsx` - Blog listing page
  - `blog/[id]/page.tsx` - Individual blog post pages
- `components/` - Reusable React components
  - `Navigation.tsx` - Site navigation
  - `Footer.tsx` - Site footer
- `public/` - Static assets like images and icons

## Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions. When you push to the main branch, the workflow in `.github/workflows/deploy.yml` will:

1. Build the Next.js project
2. Export static files
3. Deploy them to the gh-pages branch

## Customization

### Adding New Pages

Create a new directory in the `app` folder with a `page.tsx` file:

```tsx
// app/new-page/page.tsx
export default function NewPage() {
  return (
    <div>
      <h1>New Page</h1>
      <p>This is a new page.</p>
    </div>
  );
}
```

### Adding Blog Posts

To add a new blog post, update the `blogPosts` array in `app/blog/page.tsx` and `app/blog/[id]/page.tsx`.

### Styling

This project uses Tailwind CSS for styling. You can customize the theme in `app/globals.css`.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
