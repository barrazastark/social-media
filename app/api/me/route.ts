import { NextResponse } from "next/server";
import { users } from "@/lib/mockData";

export async function GET() {
  const me = users[0];
  return NextResponse.json(me, { status: 200 });
}
