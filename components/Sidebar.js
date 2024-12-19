import React from "react";
import Image from "next/image";
import Dropdown from "./Dropdown";
import { FaChevronRight } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="p-4 w-full h-screen flex flex-col justify-between border-[1px] border-solid border-[#303031]">
      {/* Logo */}
      <div>
        <Image
          src="https://reju.pro/_next/image?url=%2Fimages%2Flogo%2FWhatsApp_Image_2024-05-24_at_7.10.23_PM-removebg-preview.png&w=828&q=75"
          alt="image"
          width={150}
          height={150}
          className="mx-auto"
        />
        <div className="pt-10 text-[14px]">
          <Dropdown />
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-gray-400 text-[13px] w-[100%] px-2 mb-5">
        <div className="flex items-center gap-2">
          <div className="bg-gray-400 rounded-full p-2 w-[28px] h-[28px] flex items-center justify-center text-black">
            T
          </div>
          <p>Test</p>
        </div>
        <FaChevronRight />
      </div>
    </div>
  );
};

export default Sidebar;
