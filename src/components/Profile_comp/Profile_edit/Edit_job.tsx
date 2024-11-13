"use client";
import React, { useCallback, useState } from "react";
import { X, Plus, Check, Pen } from "lucide-react";

const Edit_job = () => {
  const [isEditing, setIsEditing] = useState(false);
  const handleClick = useCallback(() => {
    setIsEditing(!isEditing);
  }, [isEditing, setIsEditing]);

  const [jobTitles, setJobTitles] = useState([
    "Software Engineer",
    "Full-stack Developer",
  ]);

  const [locations, setLocations] = useState(["Bengaluru, Karnataka, India"]);
  const [locationTypes, setLocationTypes] = useState({
    "On-site": true,
    Hybrid: true,
    Remote: true,
  });
  const [isjobedit, setisjobedit] = useState(false);
  const [islocationsedit, setislocationsedit] = useState(false);
  const removeJobTitle = (title: string) => {
    setJobTitles(jobTitles.filter((t) => t !== title));
  };

  const removeLocation = (location: string) => {
    setLocations(locations.filter((l) => l !== location));
  };

  const handlejobedit = useCallback(() => {
    setisjobedit(!isjobedit);
  }, [isjobedit, setisjobedit]);

  const handlelocationedit=useCallback(() => {
    setislocationsedit(!isjobedit);
  }, [islocationsedit, setislocationsedit]);

  return (
    <>
      <button onClick={handleClick}>
        <Pen size={15} />
      </button>
      {isEditing && (
        <div className="fixed top-0 left-0 bg-black bg-opacity-40 w-full h-screen z-10 flex items-center justify-center">
          <div className="bg-[#1b1f23] text-white rounded-lg max-w-xl w-full p-2">
            <div className="flex justify-between items-center mb-6 border-b-[.1rem] border-gray-500 p-6 ">
              <h2 className="text-xl font-semibold">Edit job preferences</h2>
              <button
                className="text-gray-400 hover:text-gray-300"
                onClick={handleClick}
              >
                <X size={24} />
              </button>
            </div>
            <div className="space-y-6 p-6">
              <div>
                <label className="block text-sm mb-2">
                  Job titles<span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {jobTitles.map((title) => (
                    <div
                      key={title}
                      className="bg-emerald-500 text-[#1b1f23] px-3 py-1 rounded-full flex items-center gap-2"
                    >
                      <span>{title}</span>
                      <button
                        onClick={() => removeJobTitle(title)}
                        className="hover:text-gray-200"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
                {!isjobedit && (
                  <button
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                    onClick={handlejobedit}
                  >
                    <Plus size={16} />
                    <span>Add title</span>
                  </button>
                )}
                {isjobedit && (
                  <div>
                    <input
                      type="text"
                      placeholder="Enter job title"
                      className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-blue-400 focus:ring-2 bg-transparent"
                      value={jobTitles}
                      onChange={(e) => setJobTitles([e.target.value])}
                    />
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm mb-2">
                  Location types<span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(locationTypes).map(([type, isSelected]) => (
                    <div
                      key={type}
                      className="bg-emerald-500 text-[#1b1f23] px-3 py-1 rounded-full flex items-center gap-2"
                    >
                      <span>{type}</span>
                      {isSelected && <Check size={16} />}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm mb-2">
                  Locations (on-site)<span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {locations.map((location) => (
                    <div
                      key={location}
                      className="bg-emerald-500 text-[#1b1f23] px-3 py-1 rounded-full flex items-center gap-2"
                    >
                      <span>{location}</span>
                      <button
                        onClick={() => removeLocation(location)}
                        className="hover:text-gray-200"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
                {!islocationsedit && (
                  <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300" onClick={handlelocationedit}>
                    <Plus size={16} />
                    <span>Add location</span>
                  </button>
                )}
                {islocationsedit && (
                  <div>
                    <input
                      type="text"
                      placeholder="Enter job title"
                      className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-blue-400 focus:ring-2 bg-transparent"
                        value={locations}
                        onChange={(e)=>setLocations([e.target.value])}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-between mt-8 px-4 py-2 border-t-[.1rem] border-gray-500">
              <button className="text-gray-400 hover:text-gray-300 ">
                Delete
              </button>
              <button className="rounded-full bg-blue-400 text-[#1b1f23]  font-medium py-2 px-5" onClick={handleClick}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Edit_job;
