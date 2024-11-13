import About_comp from "@/components/Profile_comp/About_comp";
import BottomNav_comp from "@/components/Profile_comp/BottomNav_comp";
import Education_comp from "@/components/Profile_comp/Education_comp";
import Experience_comp from "@/components/Profile_comp/Experience_comp";
import Main_prof from "@/components/Profile_comp/Main_prof";
import Profile_settings from "@/components/Profile_comp/Profile_settings";
import Profile_view from "@/components/Profile_comp/Profile_view";
import Publication from "@/components/Profile_comp/Publication";
import Service_comp from "@/components/Profile_comp/Service_comp";
import Image from "next/image";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="bg-black w-full relative">
      <div className="hidden md:block">
        <BottomNav_comp />
      </div>
      <div className="flex md:items-start items-center w-full justify-center md:py-5 gap-3">
        <div className="flex items-center justify-center flex-col gap-2">
          <Main_prof />
          <About_comp />
          <Service_comp />
          <Experience_comp />
          <Education_comp />
          <Publication />
        </div>
        <div className="hidden md:block">
          <div className="flex flex-col gap-2 ">
            <Profile_settings />
            <Profile_view />
            <Image src='/assets/profile/ads.png' width={300} height={0} alt="ads" className="object-cover w-[20rem] rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
