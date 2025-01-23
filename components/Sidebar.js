import React from "react";
import Image from "next/image";
import Dropdown from "./Dropdown";
import { FaChevronRight } from "react-icons/fa";
import { useContext } from "react";
import { ProfileBuilderContext } from "@/app/Context/ContextProvider";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Sidebar = () => {
  const { profile } = useContext(ProfileBuilderContext);
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
            {profile?.name ? profile.name.charAt(0).toUpperCase() : "P"}
          </div>
          <p>{profile.name}</p>
        </div>
        <Popover>
          <PopoverTrigger>
            <FaChevronRight />
          </PopoverTrigger>
          <PopoverContent>
            <div className="text-white">
              <div className="flex gap-2">
                <img
                  src={profile?.profileImage.url}
                  alt=""
                  className="h-10 w-10 rounded-full"
                />
                <div className="">
                  <h1 className="bold">{profile?.name}</h1>
                  <p className="text-[15px] ">{profile?.email}</p>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Sidebar;
