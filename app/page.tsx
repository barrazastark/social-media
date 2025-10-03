import { Post as PostType } from "@/lib/types"
import Post from "@/app/components/Post";


export default async function FeedPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const r = await fetch(`${baseUrl}/api/posts`, { cache: "no-store" });
  const { posts }: { posts: PostType[] } = await r.json();

  return (
    <div className="mx-auto max-w-3xl p-4">
      <h1 className="mb-4 text-xl font-bold">MY FEED</h1>
      <ul className="space-y-4">
        {posts.map((post) => {
          return (
            <Post post={post} key={post.id} />
          );
        })}
      </ul>
    </div>
  );
}
