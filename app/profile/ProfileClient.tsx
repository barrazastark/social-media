"use client";

import { useState } from "react";
import Link from "next/link";
import { User } from "@/lib/types";

interface ProfileClientProps {
  me: User;
}

export default function ProfileClient({ me }: ProfileClientProps) {
  const [activeTabName, setActiveTabName] = useState("My Posts");

  const handleTabClick = (tab: string) => setActiveTabName(tab);

  return (
    <div className="bg-[#ffe5d9] min-h-screen">
      <div
        className="mx-auto w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl 
          px-4 sm:px-6 md:px-8 py-6 "
      >
        <div className="bg-[#FFE5D9] rounded-lg  relative w-full">
          <div
            className="h-48 bg-pink-200 bg-cover bg-center rounded-t-xl"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80')",
            }}
          />
          <div className="absolute left-[30px] -bottom-12 z-50 ">
            <img
              src={me.avatarUrl}
              alt={me.name}
              className="w-24 h-24 rounded-full border-4 border-white object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-[10px] self-stretch rounded-b-[10px] bg-[#FFF6F2] px-[30px] pt-[60px] pb-[30px] text-[#874854]">
          <h2 className="text-[30px] font-bold">{me.name}</h2>
          <p className="text-[16px] font-normal text-[#5E5E5E]">
            @{me.username}
          </p>
          <p className="text-[16px] font-normal max-w-2xl">{me.bio}</p>

          <div className="flex gap-6 mt-4 text-[16px] font-normal flex-wrap">
            <div className="flex items-baseline gap-1">
              <span className="text-[20px] font-bold text-[#874854]">
                {me.myPosts.length}
              </span>
              <span className="text-[16px] font-normal text-[#874854]">
                Posts
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-[20px] font-bold text-[#874854]">
                500
              </span>
              <span className="text-[16px] font-normal text-[#874854]">
                Followers
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-[20px] font-bold text-[#874854]">
                {me.friends.length}
              </span>
              <span className="text-[16px] font-normal text-[#874854]">
                Following
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#FFF6F2] mt-2 rounded-xl p-6 text-[#874854]">
          <div className="flex mt-6 border-b border-[#F4ACB7]">
            {["My Posts", "Friends"].map((tab) => {
              const isActive = activeTabName === tab;
              return (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`px-4 py-3 mr-4 text-center text-[16px] border-b-2 ${
                    isActive
                      ? "text-[#874854] font-bold border-[#F4ACB7]"
                      : "text-[#5E5E5E] font-normal border-transparent"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {activeTabName === "My Posts" && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-[26px] mt-[30px]">
              {me.myPosts.length > 0 ? (
                me.myPosts.map((post) => (
                  <div className="flex flex-col" key={post.id}>
                    <img
                      src={post.content.image}
                      alt={`Post by ${me.name}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <Link className="mt-2" href={`/posts/${post.id}`}>
                      View More
                    </Link>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No posts yet.</p>
              )}
            </div>
          )}

          {activeTabName === "Friends" && (
            <ul className="flex flex-col mt-4 gap-2">
              {me.friends.map((f) => {
                const username = `@${f}`;
                return (
                  <li
                    key={username}
                    className="bg-[#FFCAD4]/90 text-[#874854] font-semibold rounded px-3 py-2 text-sm font-medium"
                  >
                    {username}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
