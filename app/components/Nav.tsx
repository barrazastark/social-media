"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const isFeed = pathname === "/";
  const isProfile = pathname.startsWith("/profile");

  const baseItem =
    "flex items-center justify-center lg:justify-start gap-2 px-5 py-3 rounded";
  const active = "bg-[#F4ACB7] text-[#874854] font-semibold";
  const inactive = "bg-[#FFCAD4] text-[#874854] hover:bg-[#F4ACB7]/80";

  return (
    <aside
      className="w-full rounded-xl bg-[#FFCAD4]/90  text-[#874854] p-3 lg:sticky lg:top-4"
    >
      <h1 className="hidden lg:block text-[28px] px-3 pb-1">
        <span className="font-black">SOCIAL</span>
        <span className="font-normal">MEDIA</span>
      </h1>

      <nav className="flex lg:flex-col w-full gap-2">
        <Link
          href="/"
          className={`${baseItem} ${isFeed ? active : inactive}`}
          prefetch
        >
          Feed
        </Link>

        <Link
          href="/profile"
          className={`${baseItem} ${isProfile ? active : inactive}`}
          prefetch
        >
          Profile
        </Link>
      </nav>
    </aside>
  );
}
