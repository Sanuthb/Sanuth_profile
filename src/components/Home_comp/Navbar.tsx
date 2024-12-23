import React from "react";
import { Blocks } from "lucide-react";
import Profile_img from "./Profile_img";
import Navsearch_comp from "./Navsearch_comp";
import Reload from "./Reload";
import BackRouter from "./BackRouter";
import ForwardRouter from "./ForwardRouter";
const Navbar = () => {
  return (
    <div className="flex items-center p-2 space-x-2 bg-gray-900 w-full text-white">
      <div className="flex items-center space-x-2">
        <BackRouter/>
        <ForwardRouter/>
        <Reload/>
      </div>

      <Navsearch_comp />

      <div className="flex items-center space-x-2">
        <button className="p-2 hover:bg-gray-700 rounded-full hidden md:block">
          <Blocks size={18} />
        </button>
        <Profile_img style={false} />
      </div>
    </div>
  );
};

export default Navbar;
