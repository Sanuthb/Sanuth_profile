import React from "react";
import Bottom_nav_item from "./Bottom_nav_item";
import amazon from "@/assets/Home/Amazon_icon.png";
import apps from "@/assets/Home/Apps_icon.png";
import gmail from "@/assets/Home/gmail_icon.png";
import linkedin from "@/assets/Home/linkedin_icon.png";
import agoda from '@/assets/Home/agoda.png'
import youtube from "@/assets/Home/youtube_icon.png";
import Bookmark from "./Bookmark";

const Bottom_nav = () => {
  const items = [
    {
      title: "Apps",
      link: "/",
      image: apps,
    },
    {
      title: "Gmail",
      link: "/",
      image: gmail,
    },
    {
      title: "Youtube",
      link: "/",
      image: youtube,
    },
    {
      title: "My profile",
      link: "/pages/profile",
      image: linkedin,
    },
    {
      title: "My journey",
      link: "/pages/journey",
      image: agoda,
    },
    {
      title: "My works",
      link: "/pages/works",
      image: amazon,
    },
  ];

  return (
    <div className="bg-gray-900 px-5  flex gap-5 justify-between">
      <div className="flex gap-3">
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
      <Bookmark />
    </div>
  );
};

export default Bottom_nav;
