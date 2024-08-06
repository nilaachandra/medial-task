
import PostCard from '@/src/components/PostCard';
import posts, { Post } from '@/src/staticData/posts';
import { notFound } from 'next/navigation';

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

export function generateMetadata({ params }: PostPageProps) {
  const post = posts.find(p => p.slug === params.slug);
  
  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}