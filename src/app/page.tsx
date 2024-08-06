import Image from "next/image";
import Link from "next/link";
import posts from "../staticData/posts";
import PostCard from "../components/PostCard";

export default function Home() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
      {posts.map((post) => (
        <div key={post.id} className="w-full">
          <PostCard
            description={post.description}
            title={post.title}
            imageUrl={post.image}
            slug={post.slug}
          />
        </div>
      ))}
    </div>
  );
}
