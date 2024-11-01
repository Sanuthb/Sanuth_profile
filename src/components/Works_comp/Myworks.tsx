import React from "react";
import Category from "./Category";

const Myworks = () => {
  return (
      <div className="flex flex-col gap-5">
        <div className="text-5xl font-bold">Categories</div>
        <Category/>
      </div>
  );
};

export default Myworks;
