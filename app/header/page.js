"use client";

import ToggleSwitch from "@/components/ToggleSwitch";
import Image from "next/image";
import React from "react";

import { useContext, useState } from "react";
import { ProfileBuilderContext } from "../Context/ContextProvider";
import User from "@/components/UserProfile/User";

const header = () => {
  const {
    profile,
    setprofile,
    updateProfilePic,
    updateCoverPic,
    updateText,
    updateLogo,
    toggleTextLogo,
    module,
  } = useContext(ProfileBuilderContext);
  const [image, setimage] = useState("");
  const [coverimage, setcoverimage] = useState("");
  const [logoimage, setlogoimage] = useState("");
  const [text, settext] = useState("");

  const changeHandler = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setimage(file);
    updateProfilePic(file);

    e.target.value = "";
  };
  const changeCoverHandler = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setcoverimage(file);
    updateCoverPic(file);

    e.target.value = "";
  };

  const textchangeHandler = async (e) => {
    e.preventDefault();
    settext(e.target.value);

    updateText(e.target.value);
  };
  const logochangeHandler = async (e) => {
    setprofile((prevProfile) => ({
      ...prevProfile,
      displayName: false,
      displayLogo: true,
    }));
    const file = e.target.files[0];
    if (!file) return;

    setlogoimage(file);
    updateLogo(file);

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

                <div className="relative w-40 h-40 border-[2px] border-dashed border-[#1d1d1d] bg-gray flex items-center justify-center rounded-lg cursor-pointer overflow-hidden">
                  <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={changeHandler}
                  />
                  <span className="text-center w-full h-full flex items-center justify-center">
                    {profile && profile.profileImage?.url ? (
                      <Image
                        src={profile.profileImage.url}
                        alt="Profile Image"
                        width={160}
                        height={160}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center">
                        <img
                          src="/plus.svg"
                          alt="plus Icon"
                          width={30}
                          height={30}
                          className="text-gray-500 bg-white rounded-lg font-bold p-1 mt-2 cursor-pointer"
                        />
                        <h1 className="font-bold mt-2">
                          Replace Profile Photo
                        </h1>
                        <p>
                          Use a size at least 564 × 710 pixels and 6MB or less
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
                    onChange={changeCoverHandler}
                  />
                  <span className="text-center relative w-full h-64">
                    {profile && profile.coverimage.url ? (
                      <Image
                        src={profile.coverimage.url}
                        alt="image"
                        fill
                        className="rounded-lg object-cover"
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
                  <ToggleSwitch />
                </div>
                <p>
                  You can add a display name manually or update a custom logo to
                  suit your branding
                </p>
                <div className="flex gap-4 mt-3">
                  <div>
                    <p>Text</p>
                    <button
                      className="bg-transparent p-0 border-none cursor-pointer"
                      onClick={() => toggleTextLogo("text")}
                      disabled={profile.displayNameOrLogo ? false : true}
                    >
                      <img
                        src="/text.svg"
                        alt="Text Icon"
                        width={50}
                        height={50}
                        className="text-gray-500 bg-white rounded-lg"
                      />
                    </button>
                  </div>
                  <div>
                    <p>Logo</p>

                    <button
                      className="bg-transparent p-0 border-none cursor-pointer"
                      onClick={() => toggleTextLogo("logo")}
                      disabled={profile.displayNameOrLogo ? false : true}
                    >
                      <img
                        src="/logo.svg"
                        alt="Logo Icon"
                        width={50}
                        height={50}
                        className="text-gray-500 bg-white rounded-lg font-bold p-1  cursor-pointer"
                      />
                    </button>
                  </div>
                </div>
              </div>
              {/* Text Section  */}
              <div
                className={`border-[1px] rounded-lg p-3 mt-5 border-[#303031]  ${
                  profile.displayName ? "block" : "hidden"
                }`}
              >
                <h1>Text</h1>
                <p className="mt-7">
                  Type your display name into the field below
                </p>
                <input
                  type="text"
                  className="p-2 rounded bg-[#1d1d1d] text-gray-400 text-[15px] border-[1px] border-[#303031] w-full mb-[30px] mt-4"
                  value={text}
                  onChange={textchangeHandler}
                />
              </div>
              {/* Logo Section */}
              <div
                className={`border-[1px] rounded-lg p-3 mt-5 border-[#303031]  ${
                  profile.displayLogo ? "block" : "hidden"
                }  `}
              >
                <h1>Logo</h1>
                <p className="mt-7">
                  Replace your display name with a custom logo.
                </p>
                <div className="relative w-36 h-36 mx-auto border-[1px] border-dashed border-[#303031] hover:border-yellow-400 bg-[#1d1d1d] flex items-center justify-center rounded-lg cursor-pointer mt-5">
                  <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={logochangeHandler}
                  />
                  <span className="text-center overflow-hidden block w-[140px] h-[100px] mx-auto">
                    {profile && profile.displayLogoImage.url ? (
                      <Image
                        src={profile.displayLogoImage.url}
                        alt="image"
                        width={140}
                        height={100}
                        className="rounded-lg object-cover"
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
                        <h1 className="font-bold mt-2">Replace Photo</h1>
                        <p>
                          Use a size at least 564 × 710 pixels and 6MB or less
                        </p>
                      </div>
                    )}
                  </span>
                </div>
              </div>
            </main>
          </div>
          <div
            className={`lg:w-[210px] 2xl:w-[360px] xl:w-[340px] md:w-[240px] md:block hidden fixed right-10 top-30 rounded-lg overflow-y-scroll text-${profile.theme.TypographyAndIconColor}`}
            style={{
              backgroundColor: profile.theme.cardColor,
              maxHeight: "calc(80vh - 10px)", // Adjusted to subtract 30px for a smaller height
              padding: "10px", // Optional, adjust based on your design
            }}
          >
            <User />
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
