"use client";
import React, { useState } from "react";
import { Folder } from "lucide-react";
import amazon from "@/assets/Home/Amazon_icon.png";
import company from "@/assets/Home/street2site.png";
import gmail from "@/assets/Home/gmail_icon.png";
import linkedin from "@/assets/Home/linkedin_icon.png";
import youtube from "@/assets/Home/youtube_icon.png";
import Bottom_nav_item from "./Bottom_nav_item";
import agoda from '@/assets/Home/agoda.png'

const Bookmark = () => {
  const [isClicked, setIsClicked] = useState(false);
  const items = [
    {
      title: "Gmail | sanuthbibin.gmail.com",
      link: "/",
      image: gmail,
    },
    {
      title: "Learn full stack development ",
      link: "/",
      image: youtube,
    },
    {
      title: "www.linkedin.com/in/sanuthb/",
      link: "/pages/profile",
      image: linkedin,
    },
    {
      title: "www.agoda.com/promos/my-journey",
      link: "/pages/journey",
      image: agoda,
    },
    {
      title: "www.Amazon.com/sb/myworks/home",
      link: "/pages/works",
      image: amazon,
    },
    {
      title: "Street2Site | low cost web designing",
      link: "https://street2site.com/",
      image: company,
    },
  ];
  return (
    <>
      <button
        onClick={() => {
          setIsClicked(!isClicked);
        }}
        className="px-2 py-1 hover:bg-gray-700 rounded-full text-sm  font-light flex gap-2"
      >
        <Folder size={19} />
        <span>All Bookmarks</span>
      </button>
      {isClicked && (
        <div className="bg-gray-900 h-[80vh] w-[20rem] absolute right-2 top-24 rounded-lg p-5">
          <div className="flex gap-7 flex-col">
            <div className="border-b-[0.12rem] border-b-gray-600 pb-3">My Bookmarks</div>
            {items.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center text-gray-400 hover:bg-gray-700 p-2 rounded-md "
                >
                  <Bottom_nav_item
                    title={item.title}
                    image={item.image?.src}
                    link={item.link}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Bookmark;
