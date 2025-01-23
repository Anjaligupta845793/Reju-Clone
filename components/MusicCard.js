import Image from "next/image";
import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { RiExpandUpDownLine } from "react-icons/ri";
import { FaEyeSlash } from "react-icons/fa6";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useContext } from "react";
import { ProfileBuilderContext } from "@/app/Context/ContextProvider";
import MusicCardProduct from "./MusicCardProduct";
import MusicCardVideo from "./MusicCardVideo";

const MusicCard = ({ item, type, id, itemid }) => {
  const { itemDeleteHandler, toggleItemVisibility } = useContext(
    ProfileBuilderContext
  );
  const visibilityHandler = async (id, itemid, visible) => {
    toggleItemVisibility(id, itemid, visible);
  };
  const deleteColumnCard = async () => {
    itemDeleteHandler(id, itemid);
  };
  return (
    <div className="flex justify-between my-6 rounded-lg  items-center border-[1px]  border-[#303031] ">
      {type === "Custom Product" ? (
        <MusicCardProduct item={item} />
      ) : type === "Youtube" || type === "Tiktok" ? (
        <MusicCardVideo item={item} />
      ) : (
        <div className="flex gap-5">
          <div className="w-[80px] h-[80px] rounded-md overflow-hidden relative">
            <Image
              src={
                item.image?.url ||
                "https://img.youtube.com/vi/3_L5mpF2bpM/hqdefault.jpg"
              }
              alt="image"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="flex flex-col justify-center py-4 xl:w-[350px] lg:w-[190px] md:w-[200px] sm:w-[180px] w-[140px]">
            <h1 className="text-[15px] font-bold text-gray-300 truncate">
              {item.title}
            </h1>
            <p className="text-[13px] text-gray-400 truncate">{item.url}</p>
          </div>
        </div>
      )}

      <div className="flex gap-2 pr-4">
        {/*  */}
        {item.visible ? (
          <MdOutlineRemoveRedEye
            size={22}
            onClick={() => visibilityHandler(id, itemid, item.visible)}
            className="cursor-pointer"
          />
        ) : (
          <FaEyeSlash
            size={22}
            onClick={() => visibilityHandler(id, itemid, item.visible)}
            className="cursor-pointer"
          />
        )}

        <Popover>
          <PopoverTrigger>
            <BsThreeDots size={25} />
          </PopoverTrigger>
          <PopoverContent>
            <button onClick={() => deleteColumnCard()}>Delete</button>
          </PopoverContent>
        </Popover>
        <RiExpandUpDownLine size={22} />
      </div>
    </div>
  );
};

export default MusicCard;
