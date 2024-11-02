import Bottom_nav from "@/components/Home_comp/Bottom_nav";
import Navbar from "@/components/Home_comp/Navbar";
import homebg from "@/assets/Home/home_bg.jpg";
import React from "react";
import Music_comp from "@/components/Home_comp/Music_comp";
import Profile_img from "@/components/Home_comp/Profile_img";

const page = () => {

  return (
    <main className="min-h-screen text-white w-full bg-black">
      <Navbar />
      <Bottom_nav />
      <div
        className="flex items-center flex-col   relative bg-cover bg-center h-[85vh] "
        style={{
          backgroundImage: `url(${homebg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute top-0 left-0 bg-black bg-opacity-35 h-full w-full"></div>
        <div className="flex justify-end gap-4 z-10 w-full p-2">
          <Music_comp/>
          <Profile_img style={true}/>
        </div>
      </div>
    </main>
  );
};

export default page;
