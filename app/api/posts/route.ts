import { NextResponse } from "next/server";
import { posts } from "@/lib/mockData";

export async function GET(_: Request) {
  return NextResponse.json({ posts }, { status: 200 });
}
