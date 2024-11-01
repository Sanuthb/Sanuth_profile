import { Search } from "lucide-react";
import React from "react";

const Search_comp = () => {
  return (
    <div className="w-full bg-white p-2 flex items-center justify-center border-x-2 border-y-2 border-[#edf0f9]">
      <div className="w-1/2 flex bg-gray-200 rounded-full items-center gap-2 p-2">
        <Search className="" />
        <input
          type="text"
          className=" bg-transparent w-full outline-none"
          placeholder="sanuth"
        />
      </div>
    </div>
  );
};

export default Search_comp;
