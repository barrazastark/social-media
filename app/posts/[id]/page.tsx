import Post from "@/app/components/Post";

export default async function PostDetailPage({
  params,
}: {
  params: { id: string };
}) {
 const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
   const r = await fetch(`${baseUrl}/api/posts/${params.id}`, { cache: "no-store" });
   const post = await r.json();

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl p-4">
        <div className="mt-6 rounded-2xl border bg-card p-10 text-center">
          <p className="text-lg font-semibold">Post not found</p>
        </div>
      </div>
    );
  }

  return (
    <Post post={post} isDetail />
  );
}
