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
          backgroundImage: `url(${websiteURL}${post.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        tw="flex flex-col w-full h-full items-center bg-black bg-opacity-70 justify-start bg-white"
      >
        <div tw="flex flex-col w-full h-2/5  p-8">
          <h1 tw="text-white text-4xl font-bold mb-4">{post.title}</h1>
          <p tw="text-gray-300 text-xl line-clamp-2">{post.description}</p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}