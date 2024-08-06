# Blog Post System with Dynamic OG Image Generation

This project implements a blog post system with dynamic Open Graph (OG) image generation for enhanced social media sharing. The system is built using Next.js and leverages the Edge runtime for OG image creation.

## Key Components

1. **Post Page (`PostPage.tsx`)**: Renders individual blog posts and generates metadata.
2. **OG Image Generator (`opengraph-image.tsx`)**: Creates dynamic Open Graph images for each post.
3. **Static Data (`posts.ts`)**: Stores blog post data.

## How It Works

### Post Page (`PostPage.tsx`)

This component is responsible for rendering individual blog posts.

Key features:
- Uses `generateStaticParams` for static site generation (SSG) of all posts.
- Implements `generateMetadata` for dynamic metadata generation, including OG image URLs.
- Fetches post data based on the slug.
- Renders the post content using `PostCard` component.
- Includes a `CommentSection` component for user interactions.

### OG Image Generator (`opengraph-image.tsx`)

This file generates dynamic Open Graph images for each blog post.

Key features:
- Utilizes Next.js `ImageResponse` for server-side image generation.
- Creates a visually appealing image with the post's background image, title, and description.
- Implements `generateStaticParams` to pre-generate OG images for all posts at build time.
- Uses Edge runtime for improved performance.

### Static Data (`posts.ts`)

Stores an array of blog post objects, each containing:
- `id`: Unique identifier for the post
- `slug`: URL-friendly string for routing
- `title`: Post title
- `description`: Brief summary of the post
- `image`: URL of the post's featured image

## Workflow

1. When a user visits a blog post page:
   - The `PostPage` component fetches the post data based on the slug.
   - It renders the post content and comment section.
   - The `generateMetadata` function creates dynamic metadata, including the OG image URL.

2. When the OG image is requested (e.g., when shared on social media):
   - The `Image` function in `opengraph-image.tsx` generates a custom image.
   - It overlays the post title and description on the post's featured image.
   - The image is served using Edge runtime for optimal performance.

3. Static Site Generation:
   - At build time, `generateStaticParams` in both files ensures all post pages and OG images are pre-generated.

## Benefits

- **SEO Optimization**: Dynamic metadata and OG images improve search engine visibility and social media sharing.
- **Performance**: Edge runtime and static generation provide fast load times.
- **Maintainability**: Centralized post data makes it easy to manage and update content.
- **Scalability**: The system can handle a large number of posts efficiently.

## Setup and Configuration

1. Ensure all dependencies are installed (Next.js, React, etc.).
2. Add your posts to the `posts.ts` file.
3. Customize the OG image design in `opengraph-image.tsx` if desired.
4. Run the build process to generate static pages and OG images.

## Deployment

Deploy the project to a platform that supports Next.js and Edge runtime (e.g., Vercel). The `websiteURL` in the OG image generator will automatically adjust based on the environment.
