"use client";
import React, { useState } from "react";
import { X, Pen, Linkedin, Link, Mail } from "lucide-react";

const Contact_info = () => {
  const [isClicked, setIsClicked] = useState(false);

  const items = [
    {
      icon: <Linkedin size={25} />,
      title: "Your Profile",
      value: "linkedin.com/in/sanuthb",
    },
    {
      icon: <Link size={25} />,
      title: "Website",
      value: "street2site.com",
    },
    {
      icon: <Mail size={25} />,
      title: "Email",
      value: "sanuthbibin@gmail.com",
    },
  ];
  return (
    <div>
      <button
        className="text-blue-400 font-semibold hover:underline"
        onClick={() => {
          setIsClicked(true);
        }}
      >
        Contact Info
      </button>
      {isClicked && (
        <div className="fixed top-10 left-0 w-full h-screen bg-black bg-opacity-35 flex items-center justify-center z-20">
          <div className="bg-[#1b1f23] w-full  rounded-lg">
            <div className="p-5 flex justify-between border-b-2 border-gray-600">
              <h1 className="text-2xl">Sanuth B</h1>
              <button
                className="hover:bg-gray-700 hover:bg-opacity-25 p-2 rounded-full"
                onClick={() => {
                  setIsClicked(false);
                }}
              >
                <X />
              </button>
            </div>
            <div>
              <div className="p-5 flex justify-between">
                <h1 className="font-semibold">Contact info</h1>
                <button className="hover:bg-gray-700 hover:bg-opacity-25 p-2 rounded-full ">
                  <Pen size={20} />
                </button>
              </div>
              <div className="p-5 flex flex-col gap-6">
                {items.map((item, index) => {
                  return (
                    <div key={index} className="flex gap-5 items-center ">
                      <div className="text-gray-400 ">{item.icon}</div>
                      <div>
                        <div className="text-xl font-bold">{item.title}</div>
                        <div className="text-blue-500">{item.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="p-5 flex flex-col gap-3">
                <p className="text-base font-bold">
                  Enhance your profile with AI-powered suggestions
                </p>
                <p className="text-sm">
                  Members can receive up to 2x as many opportunities with a
                  stronger profile.
                </p>
                <button className="w-fit p-2 bg-[#f8c77e] hover:bg-[#e9a53f] rounded-lg text-black font-medium">
                  Try Premium for ₹0
                </button>
                <p className="text-sm">
                  1 month free trial with round-the-clock support. Cancel
                  anytime. We’ll send you a reminder 7 days before your trial
                  ends.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact_info;
