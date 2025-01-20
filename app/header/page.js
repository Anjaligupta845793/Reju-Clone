"use client";
import FileInput from "@/components/FileInput";
import ToggleSwitch from "@/components/ToggleSwitch";
import Image from "next/image";
import React from "react";

import { useContext, useState } from "react";
import { ProfileBuilderContext } from "../Context/ContextProvider";
import User from "@/components/UserProfile/User";

const header = () => {
  const { profile, updateProfilePic } = useContext(ProfileBuilderContext);
  const [image, setimage] = useState("");
  const changeHandler = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setimage(file);
    updateProfilePic(file);

    e.target.value = "";
  };
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
              {/* Profile Section */}
              <div className=" border-[1px] rounded-lg p-3 border-[#303031]">
                <h1 className="text-lg leading-1 mb-5 ">Profile Photo</h1>

                <div className="relative w-40 h-40  border-[2px] border-dashed border-[#1d1d1d]  bg-gray flex items-center justify-center rounded-lg cursor-pointer">
                  <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={changeHandler}
                  />
                  <span className="text-center">
                    {profile && profile.profileImage.url ? (
                      <Image
                        src="https://api.reju.pro/images/1724319927505-justb.jpeg"
                        alt="image"
                        width={140}
                        height={150}
                        className="rounded-lg"
                      />
                    ) : (
                      <div>
                        <img
                          src="/plus.svg"
                          alt="plus Icon"
                          width={30}
                          height={30}
                          className="text-gray-500 bg-white rounded-lg font-bold p-1 mt-2 cursor-pointer mx-auto"
                        />
                        <h1 className="font-bold mt-2">
                          Replace Profile Photo
                        </h1>
                        <p>
                          Use a size a least 564 × 710 pixel and 6MB or less
                        </p>
                      </div>
                    )}
                  </span>
                </div>
              </div>
              {/* Background Section */}
              <div className=" border-[1px] rounded-lg p-3 mt-5 border-[#303031]">
                <h1 className="text-lg leading-1 mb-5 ">Background Photo</h1>

                <div className="relative w-full h-60  border-[1px] border-dashed border-[#1d1d1d]  bg-gray flex items-center justify-center rounded-lg cursor-pointer ">
                  <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <span className="text-center">
                    {profile && profile.coverImage.url ? (
                      <Image
                        src="https://api.reju.pro/images/1730111273882-balls.png"
                        alt="image"
                        width={140}
                        height={150}
                        className="rounded-lg"
                      />
                    ) : (
                      <div>
                        <img
                          src="/plus.svg"
                          alt="plus Icon"
                          width={30}
                          height={30}
                          className="text-gray-500 bg-white rounded-lg font-bold p-1 mt-2 cursor-pointer mx-auto"
                        />
                        <h1 className="font-bold mt-2">Replace Cover Photo</h1>
                        <p>
                          Use a size a least 710 × 564 pixel and 6MB or less
                        </p>
                      </div>
                    )}
                  </span>
                </div>
              </div>
              {/* Display Name or Logo */}
              <div className=" border-[1px] rounded-lg p-3 mt-5 border-[#303031]">
                <div className="flex justify-between">
                  <h1>Display Name or Logo</h1>
                  <ToggleSwitch /* onClick={toggleDisplayButton}  */ />
                </div>
                <p>
                  You can add a display name manually or update a custom logo to
                  suit your branding
                </p>
                <div className="flex gap-4 mt-3">
                  <div>
                    <p>Text</p>
                    <img
                      src="/text.svg"
                      alt="Text Icon"
                      width={50}
                      height={50}
                      className="text-gray-500 bg-white rounded-lg font-bold p-1 mt-2 cursor-pointer"
                      /* onClick={textOnclick} */
                    />
                  </div>
                  <div>
                    <p>Logo</p>
                    <img
                      src="/logo.svg"
                      alt="Logo Icon"
                      width={50}
                      height={50}
                      className="text-gray-500 bg-white rounded-lg font-bold p-1 mt-2 cursor-pointer"
                      /* onClick={logoOnClick} */
                    />
                  </div>
                </div>
              </div>
              {/* Text Section  */}
              <div
                className={`border-[1px] rounded-lg p-3 mt-5 border-[#303031] `}
                /*  ${
                  displayName ? "block" : "hidden"
                } */
              >
                <h1>Text</h1>
                <p className="mt-7">
                  Type your display name into the field below
                </p>
                <input
                  type="text"
                  className="p-2 rounded bg-[#1d1d1d] text-gray-400 text-[15px] border-[1px] border-[#303031] w-full mb-[30px] mt-4"
                />
              </div>
              {/* Logo Section */}
              <div
                className={`border-[1px] rounded-lg p-3 mt-5 border-[#303031]   `}
                /*  ${
                  displayLogo ? "block" : "hidden"
                } */
              >
                <h1>Logo</h1>
                <p className="mt-7">
                  Replace your display name with a custom logo.
                </p>
                <div className="relative w-36 h-36 mx-auto border-[1px] border-dashed border-[#303031] hover:border-yellow-400 bg-[#1d1d1d] flex items-center justify-center rounded-lg cursor-pointer mt-5">
                  <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <span className="text-yellow-400 text-2xl">+</span>
                </div>
              </div>
            </main>
          </div>
          <div className="lg:w-[210px] 2xl:w-[360px] xl:w-[340px] md:w-[240px] md:block hidden bg-[#1d1d1d] fixed right-10 top-30 rounded-lg pt-[180px] overflow-y-auto">
            <User />
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
