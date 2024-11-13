"use client";
import {
  Pen,
  X,
  Crop,
  Blend,
  SlidersHorizontal,
  RotateCw,
  RotateCcw,
} from "lucide-react";
import Image from "next/image";
import React, { useCallback } from "react";

const Background_edit = () => {
  const [isEditing, setIsEditing] = React.useState(false);
  const handleClick = useCallback(() => {
    setIsEditing(!isEditing);
  }, [isEditing, setIsEditing]);
  return (
    <>
      <button onClick={handleClick}>
        <Pen size={18} />
      </button>
      {isEditing && (
        <div className="fixed top-0 left-0 bg-black bg-opacity-40 w-full h-screen z-10 flex items-center justify-center">
          <div className="bg-[#1b1f23] w-1/2  rounded-lg ">
            <div className="text-white w-full flex justify-between p-3">
              <h1 className="text-xl font-medium p-2">Background photo</h1>
              <button
                onClick={handleClick}
                className="p-2 hover:bg-[#2c2f33] rounded-full"
              >
                <X />
              </button>
            </div>
            <div className="bg-black flex items-center justify-center w-full  py-10">
              <Image
                src="/assets/profile/banner.jpg"
                alt="banner"
                width={500}
                height={0}
                className="w-full object-cover "
              />
            </div>
            <div className=" flex text-white p-1">
              <button className="hover:bg-[#2c2f33] gap-2 flex text-lg cursor-pointer text-green-500 border-b-[.1rem] border-green-500 py-2 px-5">
                <Crop />
                Crop
              </button>
              <button className="hover:bg-[#2c2f33] flex  gap-2 text-lg cursor-pointer  py-2 px-5">
                <Blend />
                Filters
              </button>
              <button className="hover:bg-[#2c2f33] flex text-lg gap-2 cursor-pointer  py-2 px-5">
                <SlidersHorizontal /> Adjust
              </button>
            </div>
            <div className="p-1 flex items-center justify-end gap-4">
              <button className=" p-1 hover:border-[.15rem] border-[.1rem] rounded-full border-white text-white">
                <RotateCcw size={20} />
              </button>
              <button className=" p-1 hover:border-[.15rem] border-[.1rem] rounded-full border-white text-white">
                <RotateCw size={20} />
              </button>
            </div>

            <div className="px-5 text-white flex items-center justify-between">
              <div className="flex gap-1 flex-col">
                <h1>Zoom</h1>
                <span className="text-white flex gap-2">
                  <span className="text-3xl">-</span>
                  <input
                    type="range"
                    name=""
                    id=""
                    className=" w-52"
                  />
                  <span className="text-3xl">+ </span>
                </span>
              </div>
              <div className="flex gap-1 flex-col">
                <h1>Straighten</h1>
                <span className="text-white flex gap-2">
                  <span className="text-3xl">-</span>
                  <input
                    type="range"
                    name=""
                    id=""
                    className=" w-52"
                  />
                  <span className="text-3xl">+ </span>
                </span>
              </div>
            </div>

            <div className="p-1 w-full flex items-center justify-between">
              <button className="hover:bg-[#2c2f33] text-gray-300 font-medium p-3">
                Delete photo
              </button>
              <div className="flex gap-5">
                <button className="rounded-full border-blue-400 text-blue-400 border-[.15rem] font-medium py-3 px-3">
                  Change photo
                </button>
                <button className="rounded-full bg-blue-400 text-[#1b1f23]  font-medium py-3 px-3">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Background_edit;
