import React from "react";
import Bottom_nav_item from "./Bottom_nav_item";
import Bookmark from "./Bookmark";

const Bottom_nav = () => {
  const items = [
    {
      title: "Apps",
      link: "/",
      image: '/assets/Home/Apps_icon.png', 
    },
    {
      title: "Gmail",
      link: "/",
      image: '/assets/Home/gmail_icon.png', 
    },
    {
      title: "Youtube",
      link: "https://www.youtube.com/",
      image: '/assets/Home/youtube_icon.png', 
    },
    {
      title: "My profile",
      link: "/pages/profile",
      image: '/assets/Home/linkedin_icon.png', 
    },
    {
      title: "My journey",
      link: "/pages/journey",
      image: '/assets/Home/agoda.png', 
    },
    {
      title: "My works",
      link: "/pages/works",
      image: '/assets/Home/Amazon_icon.png', 
    },
  ];

  return (
    <div className="bg-gray-900 px-5 flex gap-5 justify-between">
      <div className="hidden md:flex gap-3">
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
      <div className="hidden md:block">
        <Bookmark />
      </div>
    </div>
  );
};

export default Bottom_nav;
