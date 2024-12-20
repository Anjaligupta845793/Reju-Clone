"use client";
import Column from "@/components/Column";
import Image from "next/image";
import { MyMusicData } from "@/app/Data/MyMusicData";
import { IoMdMenu } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import MobileSidebar from "@/components/MobileSidebar";
import {
  FirstColumnData,
  SecondColumnData,
  ThirdColumnData,
  FourthColumnData,
} from "./Data/FirstColumn";

import { OutNowData, DJMixes, YouTube } from "./Data/OutNow";

export default function Home() {
  return (
    <div className=" flex-1 bg-black flex flex-col">
      <div className="w-full text-black">
        {/* Sticky Header */}
        <div className="bg-[#1d1d1d] text-white md:px-10 px-2 border-b-[1px] border-solid border-[#303031] lg:sticky lg:top-0 lg:z-10">
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
            <main>
              <div className="flex flex-col gap-8">
                <Column data={MyMusicData} item={FirstColumnData} />
                <Column data={OutNowData} item={SecondColumnData} />
                <Column data={DJMixes} item={ThirdColumnData} />
                <Column data={YouTube} item={FourthColumnData} />
              </div>
            </main>
          </div>
          <div className="lg:w-[210px] 2xl:w-[360px] xl:w-[340px] md:w-[240px] md:block hidden bg-[#1d1d1d] fixed right-10 top-30 rounded-lg pt-[180px] overflow-y-auto">
            content
          </div>
        </div>
      </div>
    </div>
  );
}
