import Image from "next/image";
import React from "react";
import profile from "@/assets/profile/linkedin.png";
import {
  Search,
  House,
  Users,
  BriefcaseBusiness,
  MessageCircleMore,
  Bell,
  Grip,
  ChevronDown,
} from "lucide-react";
import me from "@/assets/profile/mee.jpg";

const Prof_navbar = () => {
  const items = [
    {
      title: "Home",
      icon: House,
      count: 0,
    },
    {
      title: "My Network",
      icon: Users,
      count: 2,
    },
    {
      title: "Jobs",
      icon: BriefcaseBusiness,
      count: 0,
    },
    {
      title: "Messaging",
      icon: MessageCircleMore,
      count: 0,
    },
    {
      title: "Notifications",
      icon: Bell,
      count: 12,
    },
  ];

  return (
    <div className="bg-[#1b1f23] p-3 w-full flex items-center justify-center gap-10">
      <div className="flex  gap-36">
        <div className="flex gap-2 ">
          <Image
            src={profile}
            alt="profile"
            width={40}
            className="rounded-md grayscale"
          />
          <div className="flex-1 flex items-center bg-gray-800 rounded-md px-3 py-1 max-w-full ">
            <Search size={16} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent w-full focus:outline-none text-sm text-gray-400"
            />
          </div>
        </div>
        <div className="flex gap-10">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className="relative flex  flex-col items-center justify-center cursor-pointer text-gray-400 hover:text-white"
              >
                <item.icon size={25} />
                {item.count != 0 && (
                  <div className="bg-red-600 w-4 h-4 rounded-full text-xs text-white absolute -top-1 right-4 flex items-center justify-center">
                    {item.count}
                  </div>
                )}
                <p className="text-xs font-normal">{item.title}</p>
              </div>
            );
          })}
          <div className="flex flex-col items-center justify-center cursor-pointer text-gray-400 hover:text-white">
            <Image src={me} alt="sanuth" className="rounded-full w-6" />
            <span className="flex text-xs font-normal items-center justify-center gap-1">
              Me <ChevronDown size={15} />
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8">
        <div className="flex items-center justify-center flex-col text-gray-400 hover:text-white cursor-pointer">
          <Grip size={28} />
          <span className="flex text-xs font-normal items-center justify-center gap-1">
            For Business <ChevronDown size={15} />
          </span>
        </div>
        <div className="flex items-center justify-center flex-col gap-2 text-gray-400 hover:text-white cursor-pointer">
          <div className=" w-5 h-5 bg-gradient-to-tr from-yellow-600 to-yellow-400 rounded-sm"></div>
          <span className="flex text-xs font-normal items-center justify-center gap-1">
            Try Premium for ₹0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Prof_navbar;
