import Journey_nav_comp from "@/components/Journey_comp/Journey_nav_comp";
import Search_comp from "@/components/Journey_comp/Search_comp";
import Image from "next/image";
import React from "react";
import { myjourneys } from "@/app/Utils/Myjourney";
import Link from "next/link";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  let journey_id = parseInt((await params).id);
  const journey = myjourneys.find((j) => j.id === journey_id);

  if(journey_id >=6){
    journey_id=1
  }else{
    journey_id+=1
  }

  return (
    <div>
      <Journey_nav_comp />
      <Search_comp />
      <div className="p-5 bg-white">
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-semibold">{journey?.title}</h1>
          <Image
            src={journey?.image ?? "/assets/Journey/imagenotfound.jpg"}
            alt={journey?.title ?? "imagenotfound"}
            width={1000}
            height={0}
            className="h-[30rem] rounded-lg object-cover w-full"
          />
          <div className="flex flex-col md:flex-row justify-between md:p-4 p-1">
            <div className="bg-[#eff4fc] rounded-md md:w-3/4 flex flex-col gap-3 md:p-5 w-full">
              <p className="text-justify">{journey?.description}</p>
              {journey?.description2 && (
                <p className="text-justify">{journey?.description2}</p>
              )}
              {journey?.description3 && (
                <p className="text-justify">{journey?.description3}</p>
              )}
              {journey?.description4 && (
                <p className="text-justify">{journey?.description4}</p>
              )}
            </div>
            <div className="bg-white shadow-md shadow-gray-300 rounded-lg w-full md:w-[20%] h-fit p-5 flex flex-col gap-4">
              <div className="flex justify-between">
                <h1 className="font-semibold text-xl">Starts from</h1>
                <span className="font-semibold text-xl text-red-600">
                  {journey?.price}
                </span>
              </div>
              <Link href={`/pages/journey/myjourney/${journey_id}`} className="w-full bg-blue-500 text-white font-semibold rounded-full p-2 text-center">
                See Next Journey
              </Link> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
