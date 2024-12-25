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

const Form = () => {
  const [title, settitle] = useState("");
  const [subtitle, setsubtitle] = useState("");
  return (
    <>
      <DialogContent className="">
        <DialogTitle className="">Create a Data Capture Form</DialogTitle>
        <div className="flex md:flex-row flex-col gap-3 max-h-[500px] overflow-y-scroll ">
          <div className="">
            <h1 className="text-[18px]">Module Banner</h1>
            <p className="text-[13px]">
              You can adjust the design of the module banner and preview how it
              will appear to your audience.
            </p>
            <div className="border-[1px] border-[#303031] rounded-lg mt-5 p-16 ">
              <h1>Image</h1>
              <div className="flex justify-center flex-col text-center ">
                <input
                  type="file"
                  placeholder="file"
                  className="w-[150px]  h-[150px]  mx-auto border-[3px] rounded-lg border-dotted border-[#303031]"
                />
                <h1 className="mt-10">Thumbnail Photo</h1>
                <p className="text-[14px]">
                  Use a size that’s at least 369 x 369 pixels and 6MB or less
                </p>
              </div>
            </div>
            <div className="border-[1px] border-[#303031] rounded-lg mt-5 p-2">
              <h1 className="text-[19px]">Content</h1>
              <form action="submit" className="mt-3">
                <label htmlFor="title" className="text-[13px]">
                  Title
                </label>
                <br />
                <input
                  type="text"
                  placeholder="title"
                  id="title"
                  className="p-3 bg-[#1d1d1d] w-full rounded-lg border-[1px] border-[#303031] "
                  value={title}
                  onChange={(e) => settitle(e.target.value)}
                />
                <br />
                <label htmlFor="subtitle" className="text-[13px] ">
                  Subtitle
                </label>
                <br />
                <input
                  type="text"
                  placeholder="subtitle"
                  id="subtitle"
                  value={subtitle}
                  onChange={(e) => setsubtitle(e.target.value)}
                  className="p-2 bg-[#1d1d1d] w-full rounded-lg border-[1px] border-[#303031]"
                />
              </form>
              <DialogTrigger className="bg-gray-500 py-3 mt-4 px-6 rounded-full">
                NEXT{" "}
              </DialogTrigger>
            </div>
          </div>
          <div className="w-[320px] h-[200px]  top-20 right-12 md:fixed hidden ">
            <h1>Content Module</h1>
            <div className="py-6 px-3 bg-black ">
              <div className="bg-[#1d1d1d] p-4 flex">
                <div className="bg-white w-[100px] h-[100px] rounded-lg "></div>
                <div className="ml-3">
                  <h1>{title}</h1>
                  <h1>{subtitle}</h1>
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
