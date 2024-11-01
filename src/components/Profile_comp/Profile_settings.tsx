import React from "react";
import { Pen } from "lucide-react";

const Profile_settings = () => {
  return (
    <div className="w-[20rem] bg-[#1b1f23] rounded-lg px-8 py-3 flex gap-3 flex-col">
      <div className="flex justify-between text-white flex-col">
        <div className="flex justify-between">
          <h1 className="text-lg font-semibold">Profile language</h1>
          <button className="hover:bg-[#2c2f33] p-2 rounded-full">
            <Pen size={18} />
          </button>
        </div>
        <div>
          <p className="text-gray-400 text-sm">English</p>
        </div>
      </div>
      <div className="flex justify-between text-white flex-col">
        <div className="flex justify-between">
          <h1 className="text-lg font-semibold">Public profile & URL</h1>
          <button className="hover:bg-[#2c2f33] p-2 rounded-full">
            <Pen size={18} />
          </button>
        </div>
        <div>
          <p className="text-gray-400 text-sm">www.linkedin.com/in/sanuthb</p>
        </div>
      </div>
    </div>
  );
};

export default Profile_settings;
