import React from "react";
import { ChevronLeft, ChevronRight, RotateCw, Blocks } from "lucide-react";
import Profile_img from "./Profile_img";
import Navsearch_comp from "./Navsearch_comp";
const Navbar = () => {
  return (
    <div className="flex items-center p-2 space-x-2 bg-gray-900 w-full">
      <div className="flex items-center space-x-2">
        <button className="p-1 hover:bg-gray-700 rounded-full">
          <ChevronLeft size={20} />
        </button>
        <button className="p-1 hover:bg-gray-700 rounded-full">
          <ChevronRight size={20} />
        </button>
        <button className="p-1 hover:bg-gray-700 rounded-full">
          <RotateCw size={20} />
        </button>
      </div>

      <Navsearch_comp />

      <div className="flex items-center space-x-2">
        <button className="p-2 hover:bg-gray-700 rounded-full">
          <Blocks size={18} />
        </button>
        <Profile_img style={false} />
      </div>
    </div>
  );
};

export default Navbar;
