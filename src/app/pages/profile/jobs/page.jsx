import React from "react";
import {
  Bookmark,
  List,
  ClipboardCheck,
  Square,
  StickyNote,
  ChevronLeft,
  ChevronRight,
  Youtube,
} from "lucide-react";


const page = () => {
  const items = [
    {
      title: "My jobs",
      icons: <Bookmark />,
    },
    {
      title: "Preferences",
      icons: <List />,
    },
    {
      title: "Skill Assessments",
      icons: <ClipboardCheck />,
    },
    {
      title: "My Career Insights",
      icons: <Square />,
    },
    {
      title: "Interview rep",
      icons: <StickyNote />,
    },
    {
      title: "Job seeker guidance",
      icons: <Youtube />,
    },
  ];

  return (
    <div className="bg-black h-screen w-full flex flex-col items-center p-2">
      <div className="flex gap-5 p-2 w-[80%]">
        <div className="w-fit">
          <div className="p-3 rounded-lg bg-[#1b1f23] text-white flex flex-col gap-5 w-64">
            <div className="flex flex-col gap-5">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 hover:bg-[#2c2f33] cursor-pointer p-1 "
                >
                  <span className=" font-medium">{item.icons}</span>
                  <span className=" text-lg font-normal">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5">
          <div className="bg-[#1b1f23] w-full rounded-lg  text-white flex  gap-5 py-1 px-4 flex-col">
            <div className="w-full flex items-center justify-between">
              <h1 className="text-xl">Recent job searches</h1>
              <button className="hover:bg-[#2c2f33] text-gray-400 font-medium">
                clear
              </button>
            </div>
            <div className="flex gap-2 ">
              <div className="w-full flex flex-col gap-2 hover:bg-[#2c2f33] cursor-pointer p-1 ">
                <span className=" font-medium">
                  <Square fill="white" stroke="white" />
                </span>
                <span className="  font-normal">
                  Software Engineer (Remote)
                </span>
                <span className="text-gray-400 text-sm">Bangalore</span>
              </div>
              <div className="w-full  flex flex-col gap-2 hover:bg-[#2c2f33] cursor-pointer p-1 ">
                <span className=" font-medium">
                  <Square fill="white" stroke="white" />
                </span>
                <span className=" font-normal">Data Scientist (Remote)</span>
                <span className="text-gray-400 text-sm">Bangalore</span>
              </div>
            </div>
          </div>
          <div className="bg-[#1b1f23] w-full rounded-lg  text-white flex items-end gap-5 py-1 px-4">
            <div className="flex items-center justify-between p-5 w-full">
              <h1 className="text-white text-xl">
                Explore companies that hire for your skills
              </h1>
              <div className="flex gap-5">
                <button className="rounded-full p-1 flex items-center justify-center hover:text-white hover:border-[.15rem] border-[.1rem] border-white">
                  <ChevronLeft />
                </button>
                <button className="rounded-full p-1 flex items-center justify-center hover:text-white hover:border-[.15rem] border-[.1rem] border-white">
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
