import Image from "next/image";
import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { RiExpandUpDownLine } from "react-icons/ri";

const MusicCard = ({ item }) => {
  return (
    <div className="flex justify-between my-6 rounded-lg  items-center border-[1px]  border-[#303031] ">
      <div className="flex gap-5 ">
        <Image
          src={item.image}
          alt="image"
          width={80}
          height={80}
          className="rounded-md"
        />
        <div className="flex flex-col justify-center py-4 lg:w-[400px] md:w-[200px] w-[150px] ">
          <h1 className="text-[15px] font-bold text-gray-300 truncate">
            {item.title}
          </h1>
          <p className="text-[13px] text-gray-400 truncate">{item.subtitle}</p>
        </div>
      </div>

      <div className="flex gap-2 pr-4">
        <MdOutlineRemoveRedEye size={22} />
        <BsThreeDots size={22} />
        <RiExpandUpDownLine size={22} />
      </div>
    </div>
  );
};

export default MusicCard;
