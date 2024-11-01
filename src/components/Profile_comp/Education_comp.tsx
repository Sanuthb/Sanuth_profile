"use client"
import React, { useState } from "react";
import { Plus, Pen, MoveRight } from "lucide-react";
import college from "@/assets/profile/college.jpg";
import edu from "@/assets/profile/education.jpg";
import Image from "next/image";

const EducationComp = () => {
  const [showAll, setShowAll] = useState(false);

  const items = [
    {
      image: college,
      title: "Christ Academy Institute for Advanced Studies",
      degree: "Bachelor's degree, Computer Science",
      year: "2024",
    },
    {
      image: edu,
      title: "Christ Academy Junior College",
      degree: "Higher Secondary Education, PCMC",
      year: "2021",
    },
    {
      image: edu,
      title: "St Francis ICSE School Hongasandra",
      degree: "Secondary Education",
      year: "2019",
    },
  ];

  const visibleItems = showAll ? items : items.slice(0, 2);

  return (
    <div className="w-[50rem] bg-[#1b1f23] rounded-lg px-8 py-3">
      <div className="flex items-center justify-between text-white">
        <h1 className="text-xl font-semibold">Education</h1>
        <div className="flex gap-4">
          <button className="hover:bg-[#2c2f33] p-2 rounded-full">
            <Plus size={18} />
          </button>
          <button className="hover:bg-[#2c2f33] p-2 rounded-full">
            <Pen size={18} />
          </button>
        </div>
      </div>
      <div>
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 items-center border-b-2 w-full border-gray-700 pb-3"
          >
            <div className="flex-shrink-0">
              <Image src={item.image} alt="" className="w-[3rem] h-[3rem]" />
            </div>
            <div className="mt-5">
              <div className="text-white font-semibold">{item.title}</div>
              <div className="text-gray-400">{item.degree}</div>
              <div className="text-gray-400">{item.year}</div>
            </div>
          </div>
        ))}
      </div>
      {items.length > 2 && (
        <button
          className="hover:bg-[#2c2f33] w-full flex gap-2 items-center justify-center p-2 mt-3 text-white"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : `Show all ${items.length} education`} <MoveRight size={16} />
        </button>
      )}
    </div>
  );
};

export default EducationComp;
