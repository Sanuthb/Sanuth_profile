import Journey_nav_comp from "@/components/Journey_comp/Journey_nav_comp";
import Search_comp from "@/components/Journey_comp/Search_comp";
import Image from "next/image";
import React from "react";
import { myjourneys } from "@/app/Utils/Myjourney";
import Journey_card from "@/components/Journey_comp/Journey_card";
import Filtercar_comp from "@/components/Journey_comp/Filtercar_comp";

const page = () => {
  return (
    <div>
      <Journey_nav_comp />
      <Search_comp />
      <div className="p-4 w-full ">
        <div className="relative">
          <Image
            src='/assets/Journey/mybackground.jpg'
            width={2000}
            height={0}
            alt="mybackground"
            className="h-[25rem] object-cover rounded-lg "
          />

          <div className="bg-black bg-opacity-35 absolute top-0 left-0 rounded-lg w-full h-full"></div>
        </div>
      </div>
      <div className="bg-[#eff4fc] w-full h-screen p-10">
        <h1 className="text-4xl font-medium"> Things We Will Be Exploring</h1>
        <div className="mt-10">
          <div className="flex gap-5">
            <div>
              <Filtercar_comp/>
            </div>
            <div className="flex flex-wrap gap-5">
              {myjourneys.map((journey, index) => (
                <Journey_card key={index} journey={journey} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
