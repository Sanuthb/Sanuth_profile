import Image from "next/image";
import React from "react";
import banner from "@/assets/profile/banner.jpg";
import { Pen, ShieldCheck, ExternalLink } from "lucide-react";
import profile from "@/assets/profile/mee.jpg";
import Contact_info from "./Contact_info";
import Link from "next/link";
import college from "@/assets/profile/college.jpg";
const Main_prof = () => {
  return (
    <div className="w-[50rem] bg-[#1b1f23] rounded-lg">
      <div className="relative">
        <Image src={banner} alt="banner" className="rounded-t-lg" />
        <div className="absolute top-5 right-10 text-blue-800 cursor-pointer ">
          <Pen size={18} />
        </div>
      </div>
      <div className="relative flex flex-col gap-3 py-5 px-8">
        <div className="absolute -top-20 left-6">
          <Image
            src={profile}
            alt="sanuth "
            width={150}
            className="rounded-full border-4 border-black "
          />
        </div>
        <div className=" text-gray-300 cursor-pointer flex justify-end w-full px-3 py-3 ">
          <button className="hover:bg-[#2c2f33] p-2 rounded-full">
            <Pen size={18} />
          </button>
        </div>
        <div className="flex items-start justify-between">
          <div className=" text-white flex flex-col gap-2">
            <h1 className="text-3xl font-normal flex gap-2 items-center">
              Sanuth B{" "}
              <span className="text-gray-400">
                <ShieldCheck />
              </span>
              <span className="text-gray-400 text-lg">(He/Him)</span>
            </h1>
            <p className="text-lg">
              Freelancer at Street2site | Full stack developer |
            </p>
            <div className="flex gap-2">
              <p className="text-gray-400">Bengaluru, Karnataka, India </p>
              <Contact_info />
            </div>
            <div>
              <Link
                href="https://github.com/Sanuthb"
                target="_blank"
                className="text-blue-400 flex items-center gap-2 hover:underline"
                
              >
                Github Account <ExternalLink size={15} />
              </Link>
            </div>
          </div>
          <div className="flex w-50 gap-2">
            <Image src={college} alt="caias" className="w-10 h-10" />
            <Link
              href="https://caias.in/"
              target="_blank"
              className="text-white text-sm hover:text-blue-400 hover:underline"
            >
              Christ Academy Institute For <br /> Advanced Studies
            </Link>
          </div>
        </div>
        <div className="flex gap-3 mt-4 ">
          <button className="bg-blue-400 px-3 py-1 text-[#1b1f23] rounded-2xl text-lg">
            Open to
          </button>
          <button className=" border-2 border-blue-400 px-3 py-1 text-blue-400 rounded-2xl text-lg">
            Add profile section
          </button>
          <button className="border-2 border-blue-400 px-3 py-1 text-blue-400 rounded-2xl text-lg">
            Enhance profile
          </button>
          <button className="border-2 border-gray-400 px-3 py-1 text-gray-400 rounded-2xl text-lg">
            Resources
          </button>
        </div>
        <div className="bg-[#38434f] w-fit p-3 rounded-lg mt-3 text-white">
          <h1 className=" flex justify-between items-center font-semibold">
            Open to work <Pen size={15} />
          </h1>
          <p className="text-sm">
            Software Engineer and Full-stack Developer roles
          </p>
          <button className="text-base text-blue-400 hover:underline">Show details</button>
        </div>
      </div>
    </div>
  );
};

export default Main_prof;
