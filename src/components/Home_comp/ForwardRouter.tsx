"use client";
import React from "react";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const ForwardRouter = () => {
    const router =  useRouter();
    const handleforwardroute = () => {
        router.forward();
    };
  return (
    <button className="p-1 hover:bg-gray-700 rounded-full" onClick={handleforwardroute}>
      <ChevronRight size={20} />
    </button>
  );
};

export default ForwardRouter;
