"use client";
import React from "react";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation"; 

const BackRouter = () => {
  const router = useRouter();

  const handleBackRoute = () => {
    router.back();
  };

  return (
    <button
      className="p-1 hover:bg-gray-700 rounded-full"
      onClick={handleBackRoute}
    >
      <ChevronLeft size={20} />
    </button>
  );
};

export default BackRouter;
