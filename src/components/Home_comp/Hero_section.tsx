import Image from "next/image";
import React from "react";
import Music_comp from "./Music_comp";

const Hero_section = () => {
  return (
    <div className="h-full w-full">
      <div className="flex justify-end w-full px-2 py-1">
        <Music_comp />
      </div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="w-full h-96 flex items-center justify-center flex-col gap-5">
        <div className="bg-gradient-to-r from-yellow-500 via-pink-500 to-pink-500 rounded-full p-1">
          <Image
            src="/assets/Home/mee.jpg"
            alt="sanuth"
            className="rounded-full w-20"
            width={100}
            height={0}
          />
        </div>
        <h1 className="md:text-xl">Hi! myself</h1>
        <h1 className="text-transparent text-4xl md:text-8xl font-bold tracking-wide bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text w-fit">
          Sanuth Bibin B
        </h1>

        <p className="text-center md:w-1/2  leading-6 tracking-wide text-sm">
          I’m a freelancer, full-stack developer, programmer , and Co-founder of
          Street2Site. This portfolio showcases my journey, projects, and
          passion for innovation. Dive in and explore my work—let’s connect and
          create!
        </p>
      </div>
    </div>
  );
};

export default Hero_section;
