import React from "react";
import { Pen } from "lucide-react";
import About_edit from "./Profile_edit/About_edit";

const About_comp = () => {

  return (
    <div className="w-full md:w-[50rem] bg-[#1b1f23] md:rounded-lg p-4 md:p-8">
      <div className="flex items-center justify-between text-white">
        <h1 className="text-xl font-semibold">About</h1>
        <About_edit/>
      </div>
      <div className="flex flex-col gap-4 text-white mt-5 text-sm ">
        <p className="text-justify">
          In an increasingly digital landscape, businesses struggle to create
          efficient, user-friendly applications that meet evolving customer
          demands and drive engagement.
        </p>
        <p>
          Hi, I am Sanuth Bibin, a dedicated full stack developer and
          freelancer.
        </p>
        <ul className="list-disc leading-10 px-5">
          <li>
            BCA Graduate: Solid educational foundation in computer applications.
          </li>
          <li>
            Full Stack Developer: Proficient in both front-end and back-end
            technologies.
          </li>
          <li>
            Freelancer: Experienced in delivering tailored solutions for diverse
            clients.
          </li>
          <li>
            Passionate Problem Solver: Committed to creating impactful software
            that enhances user experience.
          </li>
        </ul>
        <p>Let’s connect to tackle your development challenges!</p>
      </div>
    </div>
  );
};

export default About_comp;
