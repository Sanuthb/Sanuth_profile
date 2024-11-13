"use client";
import { Pen, X } from "lucide-react";
import React, { useCallback, useState } from "react";

const Service_edit = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [newService, setNewService] = useState(false);
  const [serviceTitle, setServiceTitle] = useState("");
  const [services, setServices] = useState(["Web Development"]);
  const handleClick = useCallback(() => {
    setIsEditing(!isEditing);
  }, [isEditing, setIsEditing]);

  const removeService = (index: number) => {
    const updatedServices = [...services];
    updatedServices.splice(index, 1);
    setServices(updatedServices);
  };

  const addService = () => {
    setNewService(true);
  };

  const handelkeypress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (serviceTitle.trim()) {
        setServices((prevState) => [...prevState, serviceTitle]);
        setServiceTitle("");
        setNewService(false);
      }
    }
  };

  return (
    <>
      <button
        className="hover:bg-[#2c2f33] p-2 rounded-full"
        onClick={handleClick}
      >
        <Pen size={18} />
      </button>
      {isEditing && (
        <div className="fixed top-0 left-0 bg-black bg-opacity-40 w-full h-screen z-10 flex items-center justify-center">
          <div className="bg-[#1b1f23] w-1/2  rounded-lg ">
            <div className="text-white w-full flex justify-between p-3 border-b-[.1rem] border-gray-600">
              <h1 className="text-xl font-medium p-2">Edit services</h1>
              <button
                onClick={handleClick}
                className="p-2 hover:bg-[#2c2f33] rounded-full"
              >
                <X />
              </button>
            </div>
            <div className="px-5 py-2">
              <span className="text-gray-500 text-sm font-semibold">
                * Indicates required
              </span>
              <h1 className="text-lg font-medium">Services provided</h1>
              <span className="text-gray-500 text-sm font-semibold">
                Add up to 10 services *
              </span>
            </div>
            <div className="px-5 py-2 w-full flex flex-wrap">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => removeService(index)}
                  className="bg-[#74e5c0] text-[#1b1f23] px-4 py-2 rounded-full mr-2 mb-2 text-lg flex items-center justify-between gap-5"
                >
                  {service}
                  <X size={20} />
                </button>
              ))}
            </div>
            <div className="px-5 py-2">
              {!newService && (
                <button
                  onClick={addService}
                  className="text-blue-400 px-4 py-2 rounded-full border-[.1rem] border-blue-400"
                >
                  + Add services
                </button>
              )}
              {newService && (
                <div>
                  <input
                    type="text"
                    placeholder="Enter job title"
                    className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-blue-400 focus:ring-2 bg-transparent"
                    value={serviceTitle}
                    onChange={(e) => setServiceTitle(e.target.value)}
                    onKeyDown={handelkeypress}
                  />
                </div>
              )}
            </div>
            <div className="px-5 py-2">
              <h1 className="text-lg font-medium">About </h1>
              <span className="text-sm text-gray-400 font-medium">
                Description
              </span>
              <div className="w-full mt-2">
                <textarea
                  name=""
                  id=""
                  className="w-full h-[5rem] bg-transparent border-[.1rem] border-white rounded-lg p-2 focus:outline-none"
                  placeholder="tell us about your services"

                />
              </div>
            </div>
            <div className="flex justify-end mt-8 px-4 py-2 border-t-[.1rem] border-gray-500">
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

export default Service_edit;
