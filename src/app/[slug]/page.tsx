import PostCard from "@/components/PostCard";
import { generateOgImage } from "@/lib/og-image";
import posts, { Post } from "@/staticData/posts";
import { Metadata } from "next";
import { notFound } from "next/navigation";




type Params = {
  slug: string;
};

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function fetchPostBySlug(slug: string): Promise<Post | undefined> {
  return posts.find((post) => post.slug === slug);
}

interface PostPageProps {
  params: Params;
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await fetchPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="lg:w-1/2 w-full mx-auto p-4">
      <PostCard
        title={post.title}
        description={post.description}
        imageUrl={post.image}
        slug={post.slug}
      />
    </div>
  );
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await fetchPostBySlug(params.slug);
  if (!post) {
    return {};
  }

  const ogImagePath = await generateOgImage(post);

  return {
    title: post.title,
    openGraph: {
      title: post.title,
      description: post.description.substring(0, 160),
      images: [`/${post.slug}/opengraph-image`],
    },
  };
}