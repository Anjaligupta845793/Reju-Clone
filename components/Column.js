import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { RiExpandUpDownLine } from "react-icons/ri";
import MusicCard from "./MusicCard";

const Column = ({ item, data }) => {
  return (
    <div
      className={`text-white
       
       bg-[#1d1d1d] border-1  rounded-2xl border-[1px] border-solid border-[#303031]`}
    >
      {/* Column Header */}
      <div className="flex justify-between border-b-[1px] px-4 md:py-6 py-4 items-center  border-[#303031]">
        <div className="flex gap-1 ">
          <input
            type="text"
            placeholder={item.input}
            className="bg-[#1d1d1d] text-[15px] text-white w-[90px] focus:w-[200px] border-b-[1px] border-transparent focus:border-b-[#303031] outline-none  transition-all duration-300 ease-in-out"
          />

          <p className="text-[14px] bg-[#303031] rounded-full min-w-[100px] px-4 py-1">
            {item.title}
          </p>
        </div>
        <div className="flex gap-2">
          <MdOutlineRemoveRedEye size={25} />
          <BsThreeDots size={25} />
          <RiExpandUpDownLine size={25} />
        </div>
      </div>
      {/* Cards Section */}
      <div className="p-4">
        <div className="flex gap-2 pt-2 px-3">
          <CiCirclePlus size={28} className="text-yellow-500 font-bold" />
          <p className="text-[14px] text-yellow-500 py-[2px]">{item.button}</p>
        </div>
        <div>
          {data.map((item) => (
            <MusicCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Column;
