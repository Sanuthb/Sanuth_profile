"use client"
import React from "react";
import {RotateCw} from "lucide-react"

const Reload = () => {
    const handlereload = () => {
      window.location.reload();
    };

  return (
    <button className="p-1 hover:bg-gray-700 rounded-full hidden md:block" onClick={handlereload}>
      <RotateCw size={20} />
    </button>
  );
};

export default Reload;
