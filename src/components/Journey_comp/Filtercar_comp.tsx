import React from "react";

const Filtercar_comp = () => {
  return (
    <div className="bg-white p-3 border-2 border-gray-300 shadow-md shadow-gray-300 rounded-lg w-60 flex gap-4 flex-col">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Apply Filter</h1>
        <h1 className="text-sm text-blue-500">clear All Filters</h1>
      </div>
      <div>
        <h1 className="text-xl font-semibold">Sort</h1>
        <div className="flex flex-col">
          <div>
            <input type="radio" name="" id="" className="w-10" />
            <label className="text-lg">Popular</label>
          </div>
          <div>
            <input type="radio" name="" id="" className="w-10" />
            <label className="text-lg">Lowest Price First</label>
          </div>
          <div>
            <input type="radio" name="" id="" className="w-10" />
            <label className="text-lg">Highest Price First</label>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-semibold">Price</h1>
        <div className="flex items-center justify-between">
          <span className="text-sm">Rs 0</span>
          <span className="text-sm">Rs 30,000</span>
        </div>
        <input type="range" min="0" max="1000" className="w-full" />
      </div>
    </div>
  );
};

export default Filtercar_comp;
