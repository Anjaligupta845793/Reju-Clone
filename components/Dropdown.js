"use client";
import Link from "next/link";
import React, { useState } from "react";

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
      <div className="text-[14px]">
        <div className="bg-yellow-500 items-center text-black p-2 rounded-lg flex justify-between">
          <div className="flex items-center gap-3">
            <img src="/menu.svg" alt="menu" width={20} height={20} />
            <p className="self-center">Profile Builder</p>
          </div>
          <button onClick={toggleDropdownFirst}>
            <img
              src={isOpenFirst ? "/up.svg" : "/down.svg"}
              alt="image"
              width={15}
              height={15}
            />
          </button>
        </div>

        {isOpenFirst && (
          <div className="text-[15px] text-gray-400 pl-10 pt-4 flex flex-col">
            <Link className="mt-2" href={"/"}>
              Content
            </Link>
            <Link className="mt-2" href={"/header"}>
              Header
            </Link>
            <Link className="mt-2" href={"/theme"}>
              Theme
            </Link>
            <Link className="mt-2" href={"/"}>
              Setting
            </Link>
          </div>
        )}
      </div>

      {/* Second */}
      <div>
        <div className="my-5 items-center text-gray-400 p-2 hover:bg-gray-700 rounded-lg flex justify-between transition-all duration-200 ease-in">
          <div className="flex items-center gap-3">
            <img src="/graph.svg" alt="graph" width={20} height={20} />
            <p className="self-center">Data Analytics</p>
          </div>
          <button onClick={toggleDropdownSecond}>
            <img
              src={isOpenSecond ? "/up.svg" : "/down.svg"}
              alt="image"
              width={15}
              height={15}
            />
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
        <div className="text-gray-400 items-center my-5 p-2 rounded-lg hover:bg-gray-800 flex justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/setting.svg"
              alt="Settings Icon"
              width={20}
              height={20}
            />
            <p className="self-center">Settings</p>
          </div>
          <button onClick={toggleDropdownThird}>
            <img
              src={isOpenThird ? "/up.svg" : "/down.svg"}
              alt="Chevron Icon"
              width={15}
              height={15}
            />
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
