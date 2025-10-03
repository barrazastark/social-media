import { NextRequest, NextResponse } from "next/server";
import { posts } from "@/lib/mockData";
import type { Post } from "@/lib/types";

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const post = posts.find((p) => p.id === id);
  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json<Post>(post);
}
