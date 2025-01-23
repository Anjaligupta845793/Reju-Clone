"use client";
import React from "react";
import Image from "next/image";
import Dropdown from "./Dropdown";
import { FaChevronRight } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useContext } from "react";
import { ProfileBuilderContext } from "@/app/Context/ContextProvider";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const MobileSidebar = ({ settoggle }) => {
  const { profile, Logout } = useContext(ProfileBuilderContext);
  return (
    <div className="p-4 w-[300px] h-screen  top-0 left-0 bg-black z-50 overflow-y-auto">
      <ImCross
        onClick={() => settoggle(false)}
        className="absolute top-4 right-5 text-white cursor-pointer"
        size={20}
      />
      <Image
        src="https://reju.pro/_next/image?url=%2Fimages%2Flogo%2FWhatsApp_Image_2024-05-24_at_7.10.23_PM-removebg-preview.png&w=828&q=75"
        alt="image"
        width={150}
        height={150}
        className="mx-auto mt-10"
      />
      <div className="pt-10 text-[14px] px-5">
        <Dropdown />
      </div>
      <div className="flex justify-between items-center text-gray-400 text-[13px] absolute bottom-5 left-10 w-[80%] px-4">
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
                  <p onClick={() => Logout()} className="cursor-pointer text-red-600">
                    Logout
                  </p>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default MobileSidebar;
