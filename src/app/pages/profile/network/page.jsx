import {
  Users,
  Contact,
  User,
  CalendarDays,
  NotepadText,
  Newspaper,
  ChevronLeft,
  ChevronRight,
  X
} from "lucide-react";
import React from "react";

const page = () => {
  const items = [
    {
      title: "Connections",
      icons: <Users />,
    },
    {
      title: "Contacts",
      icons: <Contact />,
    },
    {
      title: "Following & followers",
      icons: <User />,
    },
    {
      title: "Groups",
      icons: <Users />,
    },
    {
      title: "Events",
      icons: <CalendarDays />,
    },
    {
      title: "Pages",
      icons: <NotepadText />,
    },
    {
      title: "Newsletter",
      icons: <Newspaper />,
    },
  ];

  return (
    <div className="bg-black flex  justify-center w-full h-screen">
      <div className="flex gap-5 p-2 w-[80%]">
        <div className="w-fit">
          <div className="p-3 rounded-lg bg-[#1b1f23] text-gray-400 flex flex-col gap-5 w-64">
            <div className="text-white font-semibold border-b-[.1rem] border-white p-2">
              <h1>Manage my network</h1>
            </div>
            <div className="flex flex-col gap-5">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 hover:bg-[#2c2f33] cursor-pointer p-1 "
                >
                  <span className=" font-medium">{item.icons}</span>
                  <span className=" text-lg font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5">
          <div className="bg-[#1b1f23] w-full rounded-lg  text-white flex items-end gap-5 py-1 px-4">
            <button className="hover:bg-[#2c2f33] text-lg cursor-pointer text-green-500 border-b-[.1rem] border-green-500 py-3 px-5">
              Grow
            </button>
            <button className="hover:bg-[#2c2f33] text-lg cursor-pointer py-3 px-5">
              Catch up
            </button>
          </div>
          <div className="bg-[#1b1f23] w-full rounded-lg  text-white flex items-center justify-between gap-5 p-2">
            <h1 className="text-white p-3">No pending invitations</h1>
            <button className="hover:bg-[#2c2f33] text-gray-400 font-bold p-3">
              Manage
            </button>
          </div>
          <div className="bg-[#1b1f23] w-full rounded-lg  text-white flex items-center justify-between gap-5 p-2">
            <div className="flex items-center justify-between p-5 w-full">
              <h1 className="text-white">Stay in touch through daily games</h1>
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
          <div className="bg-[#1b1f23] w-full rounded-lg  text-white flex flex-col gap-5 p-5">
            <div className="flex w-full justify-between ">
              <h1 className="p-2 font-medium">Accelerate your job search</h1>
              <button className="hover:bg-[#2c2f33] rounded-full p-2"><X/></button>
            </div>
            <div>
              <p>Premium subscribers are 2.6x more likely to get hired on average.</p>
            </div>
            <button className="bg-[#e9a53f] w-fit rounded-full p-2 text-black">Try Premium for ₹0</button>
            <p className="text-xs">1-month free trial. Cancel anytime.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
