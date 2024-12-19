"use client";

import React, { useState } from "react";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BsFileBarGraph } from "react-icons/bs";

const Dropdown = () => {
  const [isOpenFirst, setIsOpenFirst] = useState(false);
  const [isOpenSecond, setIsOpenSecond] = useState(false);
  const [isOpenThird, setIsOpenThird] = useState(false);

  const toggleDropdownFirst = () => {
    setIsOpenFirst((prev) => !prev);
  };
  const toggleDropdownSecond = () => {
    setIsOpenSecond((prev) => !prev);
  };
  const toggleDropdownThird = () => {
    setIsOpenThird((prev) => !prev);
  };

  return (
    <>
      <div className="text-[14px]  ">
        <div className="bg-yellow-500  items-center text-black p-2 rounded-lg flex justify-between">
          <div className="flex items-center gap-3">
            <BsFillMenuButtonWideFill size={20} className="self-center" />
            <p className="self-center">Profile Builder</p>
          </div>
          <button onClick={toggleDropdownFirst}>
            {isOpenFirst ? (
              <FaChevronUp size={15} className="self-center" />
            ) : (
              <FaChevronDown size={15} className="self-center" />
            )}
          </button>
        </div>

        {isOpenFirst && (
          <div className="text-[15px] text-gray-400 pl-10 pt-4">
            <p className="mt-2">Content</p>
            <p className="mt-2">Header</p>
            <p className="mt-2">Theme</p>
            <p className="mt-2">Social Links</p>
          </div>
        )}
      </div>
      {/* Second */}
      <div>
        <div className="my-5  items-center text-gray-400 p-2 hover:bg-gray-700 rounded-lg flex justify-between transition-all duration-200 ease-in">
          <div className="flex items-center gap-3">
            <BsFileBarGraph size={20} className="self-center" />
            <p className="self-center">Data Analitics</p>
          </div>
          <button onClick={toggleDropdownSecond}>
            {isOpenSecond ? (
              <FaChevronUp size={15} className="self-center" />
            ) : (
              <FaChevronDown size={15} className="self-center" />
            )}
          </button>
        </div>

        {isOpenSecond && (
          <div className="text-[15px] text-gray-400 pl-10 pt-1">
            <p className="">Data Support</p>
          </div>
        )}
      </div>
      {/* Third dropdown */}
      <div>
        <div className="text-gray-400  items-center my-5 p-2 rounded-lg hover:bg-gray-800 flex justify-between">
          <div className="flex items-center gap-3">
            <IoMdSettings size={20} className="self-center" />
            <p className="self-center">Settings</p>
          </div>
          <button onClick={toggleDropdownThird}>
            {isOpenThird ? (
              <FaChevronUp size={15} className="self-center" />
            ) : (
              <FaChevronDown size={15} className="self-center" />
            )}
          </button>
        </div>

        {isOpenThird && (
          <div className="text-[15px] text-gray-400 pl-10 pt-1">
            <p className="">Subscription</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
