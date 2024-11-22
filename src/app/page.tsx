import Bottom_nav from "@/components/Home_comp/Bottom_nav";
import Navbar from "@/components/Home_comp/Navbar";
import React from "react";
import Hero_section from "@/components/Home_comp/Hero_section";
import Read_doc from "@/components/Home_comp/Read_doc";

const page = () => {

  return (
    <main className="h-screen text-white w-full  overflow-y-hidden relative">
      <Navbar />
      <Bottom_nav />
      <Hero_section />
      <Read_doc/>
    </main>
  );
};

export default page;
