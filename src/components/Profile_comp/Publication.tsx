import React from "react";
import { Plus, Pen,ExternalLink } from "lucide-react";
import Link from "next/link";

const Publication = () => {
  return (
    <div className="w-[50rem] bg-[#1b1f23] rounded-lg px-8 py-3 text-white">
      <div className="flex items-center justify-between text-white">
        <h1 className="text-xl font-semibold">Publication</h1>
        <div className="flex gap-4">
          <button className="hover:bg-[#2c2f33] p-2 rounded-full">
            <Plus size={18} />
          </button>
          <button className="hover:bg-[#2c2f33] p-2 rounded-full">
            <Pen size={18} />
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="font-medium">
          A study on analysis of IOT-based smart irrigation systems using
          Arduino ESP266
        </h1>
        <p className="text-sm mb-4">Artificial Intelligence and Information TechnologiesArtificial</p>
        <Link
          target="_blank"
          className="border-2 border-gray-500 p-2 rounded-2xl text-gray-400 cursor-pointer flex gap-2 w-fit items-center"
          href="https://www.taylorfrancis.com/chapters/edit/10.1201/9781003510833-79/study-analysis-iot-based-smart-irrigation-systems-using-arduino-esp266-sabarmathi-chinnaiyan-muthulakshmi-sanuth-bibin-rupesh-kishan?context=ubx&refId=e5963db4-f588-4b89-b2e7-39e7611403ed"
        >
          Show publication <ExternalLink size={18}/>
        </Link>
        <div className="flex flex-col gap-3 mt-4">
            <p>
              Importance of Agriculture: Agriculture forms the backbone of many
              economies, including India, contributing significantly to GDP and
              exports.
            </p>
            <p>
              Water Management Challenge: Traditional irrigation methods often
              result in water wastage, highlighting the need for efficient water
              management.
            </p>
            <p>
              IoT-Based Solution: The "Automatic Irrigation System Using IoT" with
              Arduino ESP266 employs sensors (temperature, humidity, and soil
              moisture) to monitor soil conditions and automate irrigation,
              conserving water.
            </p>
            <p>
              User-Friendly Control: An Android application enables users to view
              real-time sensor data and control the irrigation system, optimizing
              crop growth and enhancing agricultural practices.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Publication;
