import About_comp from "@/components/Profile_comp/About_comp";
import BottomNav_comp from "@/components/Profile_comp/BottomNav_comp";
import Education_comp from "@/components/Profile_comp/Education_comp";
import Experience_comp from "@/components/Profile_comp/Experience_comp";
import Main_prof from "@/components/Profile_comp/Main_prof";
import Prof_navbar from "@/components/Profile_comp/Prof_navbar";
import Profile_settings from "@/components/Profile_comp/Profile_settings";
import Profile_view from "@/components/Profile_comp/Profile_view";
import Publication from "@/components/Profile_comp/Publication";
import Service_comp from "@/components/Profile_comp/Service_comp";
import Image from "next/image";
import React from "react";
import ads from "@/assets/profile/ads.png";

const ProfilePage = () => {
  return (
    <div className="bg-black min-h-screen w-full relative">
      <div className="fixed z-10 top-0 left-0 w-full">
        <Prof_navbar />
      </div>
      <BottomNav_comp />
      <div className="flex items-start w-full justify-center py-20 gap-3">
        <div className="flex flex-col gap-2">
          <Main_prof />
          <About_comp />
          <Service_comp />
          <Experience_comp />
          <Education_comp />
          <Publication />
        </div>
        <div className="flex flex-col gap-2">
          <Profile_settings />
          <Profile_view />
          <Image src={ads} alt="ads" className="object-cover w-[20rem] rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
