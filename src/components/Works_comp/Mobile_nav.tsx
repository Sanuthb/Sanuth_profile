import React from "react";
import { Menu, Search, ShoppingCart, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Mobile_nav = () => {
  return (
    <div className="md:hidden w-full">
      <div className="bg-[#00453e] text-white p-2">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Menu className="h-6 w-6" />
            <div className="w-24">
              <Image
                src="/assets/Works/logo.png"
                width={100}
                height={0}
                alt="logo_image"
                className="object-cover w-[6rem] h-[3rem] "
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <span className="text-sm">Sign in</span>
              <div className="h-6 w-6 ml-1">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>
            </div>
            <ShoppingCart className="h-6 w-6" />
          </div>
        </div>

        <div className="mt-2 flex">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search Amazon"
              className="w-full py-2 px-3 pr-10 rounded-lg text-black"
            />
            <button className="absolute right-0 top-0 h-full px-3 bg-[#febd69] rounded-r-lg">
              <Search className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#00564d] text-white p-2 flex space-x-4 overflow-x-auto text-sm whitespace-nowrap">
        <Link href="/pages/works/category/Personal%20Projects">Personal Projects</Link>
        <span>Amazon Basics</span>
        <Link href="/pages/works/category/Client%20Projects">Client Projects</Link>
        <span>Best</span>
      </div>

      <div className="bg-[#00564d] text-white p-2 flex items-center text-sm border-t border-gray-700">
        <MapPin className="h-4 w-4 mr-1" />
        <span>Deliver to India</span>
      </div>
    </div>
  );
};

export default Mobile_nav;
