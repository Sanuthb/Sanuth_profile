"use client";
import React, { useCallback, useState } from "react";
import { Pen, Plus, Square, X } from "lucide-react";
const Main_edit = () => {
  const [isEditing, setIsEditing] = useState(false);
  const handleClick = useCallback(() => {
    setIsEditing(!isEditing);
  }, [isEditing, setIsEditing]);

  return (
    <>
      <button
        className="hover:bg-[#2c2f33] p-2 rounded-full"
        onClick={handleClick}
      >
        <Pen size={18} />
      </button>
      {isEditing && (
        <div className="fixed top-0 left-0 bg-black bg-opacity-40 w-full h-screen z-10 flex items-center justify-center">
          <div className="bg-[#1b1f23] text-white rounded-lg max-w-2xl w-full p-2">
            <div className="flex justify-between items-center mb-6 border-b-[.1rem] border-gray-500 p-6">
              <h2 className="text-xl font-semibold">Edit intro</h2>
              <button
                className="text-gray-400 hover:text-gray-300"
                onClick={handleClick}
              >
                <X size={24} />
              </button>
            </div>
            <div className="h-[20rem] overflow-y-scroll">
              <div className="p-2">
                <span className="text-sm text-gray-500 font-medium">
                  * Indicates required
                </span>
              </div>
              <div className="px-2">
                <span className="text-sm">
                  if you change your name, you may have to re-verify in order to
                  keep your verification.{" "}
                  <button className="text-blue-500 hover:underline">
                    Learn more
                  </button>
                </span>
              </div>
              <div className="p-2 flex gap-2 flex-col">
                <div>
                  <span className="text-gray-500 font-medium text-sm">
                    First name *
                  </span>
                  <input
                    className="bg-transparent w-full p-2 rounded-lg border-[.1rem] border-gray-300 focus:outline-none "
                    type="text"
                    placeholder="Your Name"
                    defaultValue="Sanuth"
                  />
                </div>
                <div>
                  <span className="text-gray-500 font-medium text-sm">
                    Last name *
                  </span>
                  <input
                    className="bg-transparent w-full p-2 rounded-lg border-[.1rem] border-gray-300 focus:outline-none "
                    type="text"
                    placeholder="Your Name"
                    defaultValue="B"
                  />
                </div>
                <div>
                  <span className="text-gray-500 font-medium text-sm">
                    Additional name *
                  </span>
                  <input
                    className="bg-transparent w-full p-2 rounded-lg border-[.1rem] border-gray-300 focus:outline-none "
                    type="text"
                    placeholder=""
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="w-full p-2">
                <h1 className="text-lg ">Pronouns</h1>
                <div className="w-full">
                  <select className="w-full bg-transparent border-[.1rem] border-gray-300 rounded-lg px-2 py-1 focus:outline-none">
                    <option className="bg-[#1b1f23] ">He/Him</option>
                    <option className="bg-[#1b1f23] ">Prefer not to say</option>
                    <option className="bg-[#1b1f23] ">She/Her</option>
                    <option className="bg-[#1b1f23] ">They/Them</option>
                  </select>
                </div>
              </div>
              <div className="w-full p-2">
                <h1 className="text-sm text-gray-500 font-medium">Headline*</h1>
                <div className="border-[.1rem] border-gray-300 rounded-lg">
                  <textarea
                    name=""
                    id=""
                    className="w-full bg-transparent focus-within:outline-none p-2 border-[.1rem] border-gray-300 rounded-lg"
                    defaultValue="Freelancer at Street2site | Full stack developer |"
                  />
                  <div className="m-2 border-t-[.1rem] border-gray-300 flex gap-2 p-2 ">
                    <Square fill="yellow" stroke="none" />
                    <span>
                      <button className="text-blue-400 hover:underline">
                        Get AI suggestions{" "}
                      </button>{" "}
                      with Premium
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full p-2">
                <h1 className="text-lg font-medium">Primary position</h1>
                <span className="text-sm text-gray-500 font-medium">
                  Position
                </span>
                <input
                  className="bg-transparent w-full p-2 rounded-lg border-[.1rem] border-gray-300 focus:outline-none "
                  type="text"
                  placeholder="Your Position"
                  defaultValue="Software Engineer at street2site"
                />
                <button className="flex gap-5 mt-4 p-2 hover:bg-[#1f2f41] rounded-lg text-blue-400  font-medium items-center justify-center">
                  <Plus />
                  Add new position
                </button>
              </div>
              <div className="p-2 flex gap-2">
                <input type="checkbox" className="p-2 w-7  rounded-lg" />
                <span className="text-sm">
                  Show current company in my intro
                </span>
              </div>
              <div className="p-2">
                <h1 className="text-sm text-gray-500 font-medium">Industry*</h1>
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full border-[.1rem] border-white bg-transparent rounded-lg p-2 "
                  defaultValue="Information Technology & Services"
                />
                <span className=" text-gray-500 font-semibold">
                  Learn more about{" "}
                  <button className="text-blue-500 hover:underline">
                    industry options
                  </button>
                </span>
              </div>
              <div className="p-2">
                <h1 className="text-lg font-medium">Education</h1>
                <p className="text-gray-500 font-medium">School*</p>
                <select className="w-full bg-transparent border-[.1rem] border-gray-300 rounded-lg px-2 py-1 focus:outline-none">
                  <option className="bg-[#1b1f23] ">
                    Christ Academy Institute For Advanced Studies
                  </option>
                  <option className="bg-[#1b1f23] ">
                    Christ Academy Junior College
                  </option>
                  <option className="bg-[#1b1f23] ">
                    St Fancis ICSE School Hongasandra{" "}
                  </option>
                </select>
                <button className="flex gap-5 mt-4 p-2 hover:bg-[#1f2f41] rounded-lg text-blue-400  font-medium items-center justify-center">
                  <Plus />
                  Add new education
                </button>
              </div>
              <div className="p-2 flex gap-2 flex-col">
                <h1 className="text-lg font-medium">Location</h1>
                <div>
                  <span className="text-gray-500 font-medium text-sm">
                    Country/Region *
                  </span>
                  <input
                    className="bg-transparent w-full p-2 rounded-lg border-[.1rem] border-gray-300 focus:outline-none "
                    type="text"
                    placeholder="Your Name"
                    defaultValue="India"
                  />
                </div>
                <div>
                  <span className="text-gray-500 font-medium text-sm">
                    City *
                  </span>
                  <input
                    className="bg-transparent w-full p-2 rounded-lg border-[.1rem] border-gray-300 focus:outline-none "
                    type="text"
                    placeholder="Your Name"
                    defaultValue="Bangalore,Karnataka"
                  />
                </div>
              </div>
              <div className="p-2">
                <h1 className="text-lg font-medium">Contact info</h1>
                <p className="text-gray-500 font-medium">
                  Add or edit your profile URL, email, and more
                </p>

                <button className="flex gap-5 mt-4 p-2 hover:bg-[#1f2f41] rounded-lg text-blue-400  font-medium items-center justify-center">
                  Edit contact info
                </button>
              </div>
              <div className="p-2">
                <h1 className="text-lg font-medium">Website</h1>
                <p className="text-gray-300">
                  Add a link that will appear at the top of your profile
                </p>
                <div>
                  <span className="text-gray-500 font-medium text-sm">
                    Link
                  </span>
                  <input
                    className="bg-transparent w-full p-2 rounded-lg border-[.1rem] border-gray-300 focus:outline-none "
                    type="text"
                    placeholder="Your Name"
                    defaultValue="https://github.com/Sanuthb"
                  />
                </div>
                <div>
                  <span className="text-gray-500 font-medium text-sm">
                  Link text
                  </span>
                  <input
                    className="bg-transparent w-full p-2 rounded-lg border-[.1rem] border-gray-300 focus:outline-none "
                    type="text"
                    placeholder="Your Name"
                    defaultValue="Github"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-8 px-4 py-2 border-t-[.1rem] border-gray-500">
              <button
                className="rounded-full bg-blue-400 text-[#1b1f23]  font-medium py-2 px-5"
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

export default Main_edit;
