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
      <div className="relative w-full h-full bg-black bg-opacity-70 flex flex-col justify-end p-4">
        <img
          src={`${websiteURL}${post.image}`}
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />
        <div className="relative bg-black bg-opacity-50 p-4 text-white w-full max-w-full">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-2">
            {post.title}
          </h1>
          <p className="text-lg md:text-2xl leading-snug">{post.description}</p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
