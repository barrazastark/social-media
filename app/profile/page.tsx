// app/profile/page.tsx
import ProfileClient from "./ProfileClient";
import { User } from "@/lib/types";

export default async function ProfilePage() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/me`, { cache: "no-store" });
  const me: User = await res.json();

  return <ProfileClient me={me} />;
}
