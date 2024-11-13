import Bottom_nav from "@/components/Home_comp/Bottom_nav";
import Navbar from "@/components/Home_comp/Navbar";
import React from "react";
import Music_comp from "@/components/Home_comp/Music_comp";
import Profile_img from "@/components/Home_comp/Profile_img";
import Image from "next/image";
import styles from "@/Style/font.module.css"

const page = () => {
  return (
    <main className="h-screen text-white w-full bg-black overflow-y-hidden">
      <Navbar />
      <Bottom_nav />
      <div
        className="flex items-center justify-between flex-col relative bg-cover bg-center h-[90vh]"
        style={{
          backgroundImage: `url(/assets/Home/home_bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute top-0 left-0 bg-black bg-opacity-25 h-full w-full"></div>
        <div className="flex justify-end gap-4 z-10 w-full p-2">
          <Music_comp />
          <Profile_img style={true} />
        </div>
        <div className="z-10 md:hidden ">
          <h1 className={`text-7xl text-center ${styles.my_name}`}>SANUTH BIBIN B</h1>
        </div>
        <div className="z-10 flex ">
          <div className="hidden md:flex items-center justify-end">
            <h1 className={`text-8xl ${styles.my_name}`}>Sanuth</h1>
          </div>
          <div className="">
            <Image
              src="/assets/Home/cartoon_me.png"
              alt="its me"
              width={400}
              height={0}
              className=""
            />
          </div>
          <div className="hidden  md:flex items-center justify-end">
            <h1 className={`text-8xl ${styles.my_name}`}>Bibin B</h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
