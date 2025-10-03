import Link from "next/link";
import { users } from "@/lib/mockData";
import { Post as PostType } from "@/lib/types";
import { userById } from "@/lib/utils";

type Props = {
  post: PostType;
  isDetail?: boolean;
};

export default function Post({ post, isDetail = false }: Props) {
  const author = userById(users, post.authorId);

  return (
    <article
      key={post.id}
      className="bg-[#FFF6F2] mt-2 rounded-xl p-6  text-[#874854]"
    >
      <Link href={`/posts/${post.id}`} className="block">
        <header className="flex items-start gap-4 p-5 border-b">
          <img
            src={author.avatarUrl}
            alt={`${author.name} avatar`}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full border object-cover"
          />

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold">{author.name}</span>
              <span>@{author.username}</span>
            </div>
            <p className="text-xs">
              {author.bio}
            </p>
          </div>
          {!isDetail && (
            <span className="text-xs hover:underline">
                View more →
            </span>
          )}
        </header>

        <section className="space-y-3 px-5 pb-5 pt-2">
          <h2 className="font-semibold">{post.title}</h2>
          <p className="text-sm">{post.content.title}</p>

          {post.content.image && (
            <figure className="border">
              <img
                src={post.content.image}
                alt={post.title}
                className="h-auto w-full object-cover"
              />
            </figure>
          )}
        </section>
      </Link>
    </article>
  );
}
