"use client";
import React, { useState } from "react";
import profile from "@/assets/profile/mee.jpg";
import Image from "next/image";

const BottomNav_comp = () => {
  const [isSticky, setIsSticky] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    }
    else {
      setIsSticky(false);
    }
  });

  return (
    <>
      {isSticky && (
        <div className="flex w-full bg-[#1b1f23] py-2 px-20 fixed top-16 left-0 z-10 text-white items-center justify-between border-t-[.1rem] border-gray-600">
          <div className="flex gap-2">
            <Image
              src={profile}
              alt="Sanuth"
              className="object-cover rounded-full w-[2rem] h-[2rem]"
            />
            <div className="flex flex-col">
              <h1>Sanuth B (He/Him)</h1>
              <p className="text-xs">
                Freelancer at Street2site | Full stack developer |
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="border-2 border-gray-400 px-3 py-1 text-gray-400 rounded-2xl text-sm">
              Resources
            </button>
            <button className="border-2 border-blue-400 px-3 py-1 text-blue-400 rounded-2xl text-sm">
              Add profile section
            </button>
            <button className="bg-blue-400 px-3 py-1 text-[#1b1f23] rounded-2xl text-sm">
              Open to
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BottomNav_comp;
