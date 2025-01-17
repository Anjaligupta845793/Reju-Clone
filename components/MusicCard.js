import Image from "next/image";
import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { RiExpandUpDownLine } from "react-icons/ri";
import user from "../public/user.jpg";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useContext } from "react";
import { ProfileBuilderContext } from "@/app/Context/ContextProvider";
import MusicCardProduct from "./MusicCardProduct";
import MusicCardVideo from "./MusicCardVideo";

const MusicCard = ({ item, type, id }) => {
  const { setmodule } = useContext(ProfileBuilderContext);
  const deleteColumnCard = async (id, cardid) => {
    console.log(`id:- ${id}`);
    console.log(`cardid-${cardid}`);
    const response = await fetch("/api/deleteModelCard", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cardid: cardid, id: id }),
    });
    const responseData = await response.json();
    const updatedData = responseData.data;
    setmodule(updatedData);
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
        <MdOutlineRemoveRedEye size={22} />

        <Popover>
          <PopoverTrigger>
            <BsThreeDots size={25} />
          </PopoverTrigger>
          <PopoverContent>
            <button /* onClick={() => deleteColumnCard(id, item.id)} */>
              Delete
            </button>
          </PopoverContent>
        </Popover>
        <RiExpandUpDownLine size={22} />
      </div>
    </div>
  );
};

export default MusicCard;
