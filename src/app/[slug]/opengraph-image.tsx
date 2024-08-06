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
      <div tw="flex flex-col w-full h-full items-center justify-start relative bg-black relative bg-opacity-70">
        <img src={`${websiteURL}${post.image}`} tw="absolute z-0 w-full h-full" />
        <div tw="flex flex-col w-full p-4 absolute z-30 bg-black h-full bg-opacity-50">
          <h1 tw="text-white text-7xl font-bold">{post.title}</h1>
          <p tw="text-gray-300 text-4xl line-clamp-2">{post.description}</p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
