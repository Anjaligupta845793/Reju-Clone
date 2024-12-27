"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useContext } from "react";
import { ProfileBuilderContext } from "@/app/Context/ContextProvider";

import React from "react";
import FileInput from "../FileInput";

const Form = () => {
  const [title, settitle] = useState("");
  const [subtitle, setsubtitle] = useState("");
  return (
    <>
      <DialogContent className="">
        <DialogTitle className="">Create a Data Capture Form</DialogTitle>
        <div className="flex md:flex-row flex-col gap-3 max-h-[500px] overflow-y-scroll ">
          <div className="max-w-[510px]">
            <h1 className="text-[18px]">Module Banner</h1>
            <p className="text-[14px] py-3">
              You can adjust the design of the module banner and preview how it
              will appear to your audience.
            </p>

            <div className="border-[1px] border-[#303031] rounded-lg mt-5 ">
              <h1 className="p-4 md:text-xl">Image</h1>
              <div className="flex justify-center flex-col text-center  p-10">
                <FileInput />
                <h1 className="mt-10">Thumbnail Photo</h1>
                <p className="text-[14px]">
                  Use a size that’s at least 369 x 369 pixels and 6MB or less
                </p>
              </div>
            </div>
            <div className="border-[1px] border-[#303031] rounded-lg mt-5 p-2">
              <h1 className="text-[19px]">Content</h1>
              <form action="submit" className="mt-3">
                <label htmlFor="title" className="text-[15px]">
                  Title
                </label>
                <br />
                <input
                  type="text"
                  placeholder='Add a title, e.g. "Sign up for my email letter" '
                  id="title"
                  className="p-3 bg-[#1d1d1d] w-full rounded-lg border-[1px] border-[#303031] mb-5"
                  value={title}
                  onChange={(e) => settitle(e.target.value)}
                />
                <br />
                <label htmlFor="subtitle" className="text-[15px] ">
                  Subtitle
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Add a subtitle, e.g. Receive updates and exclusive content  "
                  id="subtitle"
                  value={subtitle}
                  onChange={(e) => setsubtitle(e.target.value)}
                  className="p-2 bg-[#1d1d1d] w-full rounded-lg border-[1px]  border-[#303031]"
                />
              </form>
              <DialogTrigger className="bg-gray-500 py-3 mt-4 px-6 rounded-full">
                NEXT{" "}
              </DialogTrigger>
            </div>
          </div>
          <div className="w-[380px] h-[220px] fixed top-20 right-14 md:block hidden ">
            <h1>Content Module</h1>
            <div className="py-10 px-4 bg-black rounded-2xl">
              <div className="bg-[#1d1d1d] p-6 flex rounded-2xl">
                <div className="bg-white w-[100px] h-[100px] rounded-lg "></div>
                <div className="ml-3 ">
                  <h1 className="text-[16px] mt-5">{title}</h1>
                  <h1 className="text-[16px]">{subtitle}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </>
  );
};

export default Form;
