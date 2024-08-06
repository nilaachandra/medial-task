import { ImageResponse } from "next/og";
import posts from "@/staticData/posts";

// Set the website URL based on environment
const websiteURL =
  process.env.NODE_ENV === "production"
    ? "https://medial-task.vercel.app/"
    : "http://localhost:3000/";

export const runtime = "edge";

export const alt = "Blog post og image";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/jpg";

// Generate static parameters
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Image({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return new Response("Post not found", { status: 404 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${websiteURL}${post.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '20px',
          boxSizing: 'border-box',
          color: 'white',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '20px',
            boxSizing: 'border-box',
            overflow: 'hidden',
          }}
        >
          <h1
            style={{
              fontSize: '4vw', // Responsive font size
              fontWeight: 'bold',
              margin: 0,
              lineHeight: '1.2',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              wordBreak: 'break-word',
            }}
          >
            {post.title}
          </h1>
          <p
            style={{
              fontSize: '2vw', // Responsive font size
              margin: 0,
              lineHeight: '1.4',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
              wordBreak: 'break-word',
            }}
          >
            {post.description}
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
