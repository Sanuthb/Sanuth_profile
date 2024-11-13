"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, Globe } from "lucide-react";

const Profile_img = ({ style }: { style: boolean }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="relative">
      <button
        className={`cursor-pointer ${style ? "bg-white p-1 rounded-full" : "bg-none p-0 rounded-none"}`}
        onClick={(e) => {
          e.stopPropagation(); // Prevents event bubbling
          setIsClicked(!isClicked);
        }}
        aria-label="Profile Menu"
      >
        <Image
          src="/assets/Home/profile.png"
          alt="Profile"
          width={40} // Adjust based on the image size
          height={40} // Adjust based on the image size
          className={`${style ? "w-10 h-10" : "w-8 h-8"} rounded-full`}
        />
      </button>

      {isClicked && (
        <div className="bg-orange-500 w-[20rem] absolute top-20 right-0 shadow-lg rounded-md p-4 overflow-hidden z-20">
          <div className="bg-white rounded-full w-[3rem] h-[3rem] absolute -left-2 -top-3"></div>
          <div className="bg-white rounded-full w-[2rem] h-[2rem] absolute -left-2 -bottom-3"></div>
          <div className="bg-white rounded-full w-[2rem] h-[2rem] absolute right-0 top-5"></div>
          <div className="w-full h-1/3 p-2 flex items-center justify-center">
            <h2 className="text-white text-2xl font-bold">Hello!😊</h2>
          </div>
          <div className="bg-black h-1/2 rounded-md z-10">
            <div className="flex items-center flex-col">
              <Image
                src="/assets/Home/profile.png"
                alt="Profile"
                width={40} // Adjust for correct dimensions
                height={40} // Adjust for correct dimensions
                className="rounded-full"
              />
              <div className="flex items-center flex-col pb-3">
                <h3 className="text-xl font-medium text-white">Sanuth Bibin B</h3>
                <p className="text-sm text-gray-400 text-center">
                  Full Stack Developer | Freelancer | CFO of Street2Site
                </p>
              </div>
              <div className="p-5 flex gap-5">
                <Link href="/pages/profile" target="_blank" aria-label="LinkedIn Profile">
                  <Linkedin />
                </Link>
                <Link href="https://instagram.com/sanuthb" target="_blank" aria-label="Instagram Profile">
                  <Instagram />
                </Link>
                <Link href="https://street2site.com/" target="_blank" aria-label="Website">
                  <Globe />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile_img;
