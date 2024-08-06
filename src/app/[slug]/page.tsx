import PostCard from "@/components/PostCard";
import posts, { Post } from "@/staticData/posts";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import CommentSection from "@/components/CommentSection"; // A new component for comments

type Params = {
  slug: string;
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await fetchPostBySlug(params.slug);
  if (!post) {
    return {};
  }

  const timestamp = new Date().getTime(); // Current timestamp
  return {
    title: post.title,
    openGraph: {
      title: post.title,
      description: post.description.substring(0, 160),
      images: [`/${post.slug}/opengraph-image?t=${timestamp}`], // Append timestamp
    },
  };
}


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
    <div className="lg:w-1/2 w-full mx-auto">
      <PostCard
        title={post.title}
        description={post.description}
        imageUrl={post.image}
        slug={post.slug}
      />
      <CommentSection postId={post.id} />
    </div>
  );
}
