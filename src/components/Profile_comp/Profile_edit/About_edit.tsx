"use client";
import {
  Pen,
  X,
  Crop,
  Blend,
  SlidersHorizontal,
  RotateCw,
  RotateCcw,
  Square,
} from "lucide-react";
import React, { useCallback } from "react";

const About_edit = () => {
  const [isEditing, setIsEditing] = React.useState(false);
  const handleClick = useCallback(() => {
    setIsEditing(!isEditing);
  }, [isEditing, setIsEditing]);

  const defaultContent = `In an increasingly digital landscape, businesses struggle to create efficient, user-friendly applications that meet evolving customer demands and drive engagement.

Hi, I am Sanuth Bibin, a dedicated full stack developer and freelancer.

- BCA Graduate: Solid educational foundation in computer applications.

- Full Stack Developer: Proficient in both front-end and back-end technologies.

- Freelancer: Experienced in delivering tailored solutions for diverse clients.`;

  return (
    <>
      <button onClick={handleClick}>
        <Pen size={18} />
      </button>
      {isEditing && (
        <div className="fixed top-0 left-0 bg-black bg-opacity-40 w-full h-screen z-10 flex items-center justify-center">
          <div className="bg-[#1b1f23] w-1/2  rounded-lg ">
            <div className="text-white w-full flex justify-between p-3 border-b-[.1rem] border-gray-500">
              <h1 className="text-xl font-medium p-2">Edit about</h1>
              <button
                onClick={handleClick}
                className="p-2 hover:bg-[#2c2f33] rounded-full"
              >
                <X />
              </button>
            </div>
            <div className="px-4 py-1">
              <p className="text-gray-400 text-sm font-medium">
                You can write about your years of experience, industry, or
                skills. People also talk about their achievements or previous
                job experiences.
              </p>
            </div>
            <div className="w-full  px-4 py-1">
              <div className="border-[.1rem] border-white p-2 rounded-lg w-full ">
                <textarea
                  name=""
                  id=""
                  defaultValue={defaultContent}
                  className="w-full h-52 bg-transparent"
                />
                <div className="w-full p-2 bg-[#1b1f23]">
                  <span className="flex gap-1 items-center">
                    <Square fill="yellow" stroke="yellow" />
                    <button className="font-medium text-base text-blue-500 hover:underline">
                      Get Ai Suggestion
                    </button>
                    <span className="text-gray-400 text-sm font-medium">
                      with Premium
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-1 w-full flex items-center justify-end border-t-[.1rem] border-gray-500">
              <button
                className="rounded-full bg-blue-400 text-[#1b1f23]  font-medium py-3 px-5"
                onClick={handleClick}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About_edit;
