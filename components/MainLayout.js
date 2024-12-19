"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { IoMdMenu } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import MobileSidebar from "./MobileSidebar";

const MainLayout = ({ children }) => {
  const [toggle, settoggle] = useState(false);

  return (
    <div className="bg-white text-white flex h-screen">
      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 ${
          toggle ? "left-0" : "left-[-100%]"
        } lg:hidden block h-screen w-[300px] bg-black transition-all duration-300 ease-in-out z-50`}
      >
        <MobileSidebar settoggle={settoggle} />
      </div>

      {/* Fixed Sidebar */}
      <div className="lg:w-[300px] w-[300px] bg-black fixed h-screen hidden lg:block">
        <Sidebar />
      </div>

      {/* Main Content with Margin to Avoid Overlap */}
      <div className="lg:ml-[300px] flex-1 bg-black flex flex-col">
        <div className="w-full text-black">
          {/* Sticky Header */}
          <div className="bg-[#1d1d1d] text-white md:px-10 px-2 border-b-[1px] border-solid border-[#303031] sticky top-0 z-10">
            <div className="lg:hidden flex justify-between p-4">
              <IoMdMenu size={30} onClick={() => settoggle(true)} />
              <input
                type="text"
                placeholder="Type to Search..."
                className="border-none bg-black sm:block hidden"
              />
              <div className="flex gap-3 items-center">
                <h1 className="bg-slate-400 p-2 w-[30px] h-[30px] rounded-full"></h1>
                <FaChevronDown className="sm:block hidden" />
              </div>
            </div>

            <div className="flex justify-between p-3">
              <div className="pt-2 text-[18px]">Content</div>
              <div className="flex justify-between gap-4 text-gray-200">
                <div className="pl-4 pr-28 text-[15px] rounded-lg py-1 border-[1px] border-[#303031] sm:flex hidden">
                  test.reju.pro
                </div>
                <h1 className="pt-2">Saved</h1>
                <button className="items-center text-[13px] font-bold py-2 px-3 text-black bg-yellow-500 rounded-full">
                  PUBLISH
                </button>
              </div>
            </div>

            <div className="pl-2 pr-10 my-1 rounded-md py-1 border-2 border-gray-600 sm:hidden flex">
              test.reju.pro
            </div>
          </div>

          {/* Main Content */}
          <div className="flex bg-black text-gray-500 py-10 px-5 gap-5">
            <div className="md:w-[64%] w-[100%] bg-black text-white">
              <main>{children}</main>
            </div>
            <div className="lg:w-[210px] 2xl:w-[360px] xl:w-[340px] md:w-[240px] md:block hidden bg-[#1d1d1d] fixed right-10 top-30 rounded-lg pt-[180px] overflow-y-auto">
              content
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
