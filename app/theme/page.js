"use client";
import ColorPickerInput from "@/components/ColorPickerInput";
import DisabledCard from "@/components/DisabledCard";

import Image from "next/image";
import React from "react";
import { useContext, useEffect } from "react";
import { ProfileBuilderContext } from "../Context/ContextProvider";

const theme = () => {
  const { updateThemeType, profile, fetchUser } = useContext(
    ProfileBuilderContext
  );
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className=" flex-1 bg-black flex flex-col">
      <div className="w-full text-black">
        {/* Sticky Header */}
        <div className="bg-[#1d1d1d] text-white md:px-10 px-2 border-b-[1px] border-solid border-[#303031] lg:sticky lg:top-0 lg:z-10">
          <div className="flex justify-between p-3">
            <div className="pt-2 text-[18px]">Header</div>
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
          <div className="md:w-[64%] w-[100%] bg-gradient-to-r rounded-lg from-[#1d1d1d] to-black text-white p-3">
            <main>
              <div className="">
                <h1 className="text-lg">Select your theme</h1>
                <div className="flex gap-4 mt-3">
                  {/* Light Card */}
                  <div onClick={() => updateThemeType("light")}>
                    <h1 className="mb-2">Light</h1>
                    <div
                      className={`bg-[#1d1d1d] border-[1px] p-2 rounded-lg ${
                        profile.themeType === "light"
                          ? "border-green-500"
                          : "border-[#303031]"
                      }`}
                    >
                      {/*  */}
                      <div className="w-9 h-9 rounded-full bg-white "></div>
                    </div>
                  </div>
                  {/* Dark Card */}
                  <div onClick={() => updateThemeType("dark")}>
                    <h1 className="mb-2">Dark</h1>
                    <div
                      className={`bg-[#1d1d1d] border-[1px] p-2 rounded-lg ${
                        profile.themeType === "dark"
                          ? "border-green-500"
                          : "border-[#303031]"
                      }`}
                    >
                      <div className="w-9 h-9 rounded-full bg-black "></div>
                    </div>
                  </div>
                  {/* Custom Card */}
                  <div onClick={() => updateThemeType("custom")}>
                    <h1 className="mb-2">Custom</h1>
                    <div
                      className={`bg-[#1d1d1d] border-[1px] p-2 rounded-lg ${
                        profile.themeType === "custom"
                          ? "border-green-500"
                          : "border-[#303031]"
                      } `}
                    >
                      <Image
                        src="https://reju.pro/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon_custom_theme.f71f83a3.png&w=256&q=75"
                        alt="image"
                        width={36}
                        height={36}
                      />
                    </div>
                  </div>
                </div>
                {/* Theme Card */}
                <div>
                  {profile && profile.themeType === "light" ? (
                    <DisabledCard type="light" />
                  ) : profile.themeType === "dark" ? (
                    <DisabledCard type="dark" />
                  ) : (
                    <ColorPickerInput />
                  )}
                </div>
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
};

export default theme;
