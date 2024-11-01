import Image from "next/image";
import React from "react";
import logo from "@/assets/Works/logo.png";
import { MapPin, Search, ShoppingCart, ChevronDown } from "lucide-react";
import flag from "@/assets/Works/flag.png";

const Amazon_navbar = () => {
  return (
    <div className="bg-[#131921] w-full py-2 px-2 text-white flex justify-between items-center">
      <div className="flex items-center hover:border-2 hover:border-white cursor-pointer">
        <Image
          src={logo}
          alt="logo_image"
          className="object-cover w-[6rem] h-[3rem] "
        />
        .in
      </div>
      <div className="flex items-center hover:border-2 hover:border-white cursor-pointer">
        <MapPin className="text-gray-600" />
        <span className="text-sm text-gray-600">
          Delivering to Bengaluru 560068 <br />
          <span className="font-bold text-white">Update Location</span>
        </span>
      </div>
      <div className="bg-white  flex items-center justify-center rounded-lg w-1/3">
        <select name="" id="" className="text-black w-10 text-sm ">
          <option value="">All</option>
          <option value="">Personal Projects</option>
          <option value="">Client Projects</option>
        </select>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search in Amazon.in"
          className="outline-none text-black text-sm w-full"
        />
        <button className="text-black bg-[#f3a847] p-2 rounded-r-md rounded-br-md">
          <Search size={18} />
        </button>
      </div>
      <div className="flex items-end hover:border-2 hover:border-white cursor-pointer">
        <Image src={flag} alt="indian flag" className="w-[2rem] h-[2rem]" />
        <span className="font-bold flex items-end">EN <ChevronDown size={15}/></span>
      </div>
      <div className="hover:border-2 hover:border-white cursor-pointer">
        <span className="text-sm">Hello, sign in</span>
        <p className="text-sm font-bold flex items-end">Account & list <ChevronDown size={15}/></p>
      </div>
      <div className="flex flex-col hover:border-2 hover:border-white cursor-pointer">
        <span className="text-sm">Returns</span>
        <span className="text-sm font-bold">& Orders</span>
      </div>
      <div className="flex items-end hover:border-2 hover:border-white cursor-pointer">
        <span>
          <ShoppingCart size={30} />
        </span>
        <span className="text-sm font-bold">Cart</span>
      </div>
    </div>
  );
};

export default Amazon_navbar;
