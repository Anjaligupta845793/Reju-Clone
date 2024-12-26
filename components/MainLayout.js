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
    <div className="bg-black text-white flex h-full">
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
      <div className="w-full flex flex-col  lg:ml-[300px]">
        <div className="lg:hidden flex sticky top-0 justify-between p-4 bg-[#1d1d1d]">
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

        <div className="flex-1 bg-black">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
