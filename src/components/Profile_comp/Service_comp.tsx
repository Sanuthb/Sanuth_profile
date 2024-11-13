import React from "react";
import { MoveRight } from "lucide-react";
import Service_edit from "./Profile_edit/Service_edit";

const Service_comp = () => {
  return (
    <div className="w-full md:w-[50rem] bg-[#1b1f23] md:rounded-lg md:px-8 md:py-3 p-5">
      <div className="flex items-center justify-between text-white">
        <h1 className="text-xl font-semibold">Service</h1>
        <Service_edit />
      </div>
      <div className="mt-4 text-white">
        <h1>Web design and development</h1>
      </div>
      <div className="text-white mt-2 border-t-2 border-gray-700">
        <button className="hover:bg-[#2c2f33] w-full flex gap-2 items-center justify-center p-2 mt-3 ">
          Show all services <MoveRight />
        </button>
      </div>
    </div>
  );
};

export default Service_comp;
