import Journey_nav_comp from "@/components/Journey_comp/Journey_nav_comp";
import React from "react";
import Image from "next/image";
import bgimage from "@/assets/Journey/bg.jpg";
import Destination_comp from "@/components/Journey_comp/Destination_comp";
import Myjourney from "@/components/Journey_comp/Myjourney";
import myimage from "@/assets/Journey/mee.jpg"
import goa from "@/assets/Journey/goa.jpg"
import mumbai from "@/assets/Journey/mumbi.jpg"

const page = () => {

    const items =[
        {
            image:goa,
            title:'Goa',
            description:'6,000 accommondations',
            link:'journey/',
        },
        {
            image:myimage,
            title:'My Journey',
            description:'10,000 accommondations',
            link:'journey/myjourney',
        },
       
        {
            image:mumbai,
            title:'Mumbai',
            description:'7,000 accommondations',
            link:'journey/',
        },
    ]


  return (
    <div className="relative">
      <Journey_nav_comp />
      <div className="w-full ">
        <Image
          src={bgimage}
          alt="background"
          className="w-full h-[20rem] object-cover object-top"
        />
      </div>
      <div className="flex items-center justify-center w-full h-36">
        <div className="bg-[#f8f7f9] w-1/2 rounded-lg shadow-lg shadow-gray-400 p-10 flex flex-col gap-5">
          <div className="flex gap-2 items-center">
              <button className="p-2 bg-blue-100 border-2 border-blue-500 text-blue-500 rounded-2xl w-fit">
                My Journey
              </button>
              <h1 className="text-gray-400">Enter airport and no of travellers to see me </h1>
          </div>
          <div>
            <Destination_comp />
          </div>
        </div>
      </div>
      <div className="mt-40 p-5 flex flex-col gap-5 ">
        <h1 className="text-2xl font-medium">Top destination in India</h1>
        <div className="px-10 flex gap-10">
            <Myjourney items={items} />
        </div>
      </div>
    </div>
  );
};

export default page;
