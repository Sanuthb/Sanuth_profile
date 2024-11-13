"use client";
import React, { useState } from "react";
import { Folder, X } from "lucide-react";
import Bottom_nav_item from "./Bottom_nav_item";

const Bookmark = () => {
  const [isClicked, setIsClicked] = useState(false);
  const items = [
    {
      title: "Gmail | sanuthbibin.gmail.com",
      link: "/",
      image: "/assets/Home/gmail_icon.png",
    },
    {
      title: "Learn full stack development",
      link: "/",
      image: "/assets/Home/youtube_icon.png",
    },
    {
      title: "www.linkedin.com/in/sanuthb/",
      link: "/pages/profile",
      image: "/assets/Home/linkedin_icon.png",
    },
    {
      title: "www.agoda.com/promos/my-journey",
      link: "/pages/journey",
      image: "/assets/Home/agoda.png",
    },
    {
      title: "www.Amazon.com/sb/myworks/home",
      link: "/pages/works",
      image: "/assets/Home/Amazon_icon.png",
    },
    {
      title: "Street2Site | low cost web designing",
      link: "https://street2site.com/",
      image: "/assets/Home/street2site.png",
    },
  ];

  return (
    <>
      <button
        onClick={() => {
          setIsClicked(!isClicked);
        }}
        className="px-2 py-1 hover:bg-gray-700 rounded-full text-sm font-light flex gap-2"
      >
        <Folder size={19} />
        <span>All Bookmarks</span>
      </button>
      {isClicked && (
        <div className="bg-gray-900 h-[80vh] w-[20rem] absolute right-2 top-24 rounded-lg p-5 z-20">
          <div className="flex gap-7 flex-col">
            <div className="border-b-[0.12rem] border-b-gray-600 pb-3 flex items-center justify-between">
              <span>My Bookmarks</span>
              <button onClick={()=>{setIsClicked(!isClicked)}} className="hover:bg-gray-700 p-2 rounded-full">
                <X size={15}/>
              </button>
            </div>
            {items.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center text-gray-400 hover:bg-gray-700 p-2 rounded-md"
                >
                  <Bottom_nav_item
                    title={item.title}
                    image={item.image}
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
