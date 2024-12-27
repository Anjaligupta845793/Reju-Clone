import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import FileInput from "../FileInput";

const Link = () => {
  return (
    <>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Link</DialogTitle>

          <div className="">
            <div className="flex justify-center flex-col text-center  p-10">
              <FileInput />
              <h1 className="mt-10">Thumbnail Photo</h1>
              <p className="text-[14px]">
                Use a size that’s at least 369 x 369 pixels and 6MB or less
              </p>
            </div>

            <label htmlFor="" className="text-[15px] py-2 my-6">
              Title
            </label>
            <input
              type="text"
              placeholder="Inter title of Link"
              className="p-2 rounded bg-[#1d1d1d] text-gray-400 text-[15px] border-[1px] border-[#303031] w-full mb-[30px]"
            />
            <label htmlFor="" className="text-[15px] py-2 ">
              URL
            </label>
            <input
              type="link"
              placeholder="https://exmaple.com"
              className="p-2 rounded bg-[#1d1d1d] text-gray-400 text-[15px] border-[1px] border-[#303031] w-full mb-[30px]"
            />
            <div className="flex gap-2">
              <DialogTrigger className="px-4 py-2 rounded-full text-black bg-yellow-500 my-5 md:ml-[820px]">
                Done
              </DialogTrigger>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </>
  );
};

export default Link;
