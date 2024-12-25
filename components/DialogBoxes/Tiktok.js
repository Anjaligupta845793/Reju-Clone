import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";

import React from "react";

const Tiktok = () => {
  return (
    <>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Tiktok Content</DialogTitle>
          <DialogDescription>Individual Video</DialogDescription>
          <div>
            <p className="text-[14px]">
              Please enter a link to a Tiktok video.
            </p>
            <h1 className="pt-4 pb-1">URL</h1>
            <input
              type="text"
              placeholder="https://example.com"
              className="rounded-lg p-2 bg-[#1d1d1d] border-1 border-[#303031] w-full"
            />
            <DialogTrigger className="bg-yellow-500 px-5 py-2 rounded-full text-black mt-4  ">
              Done
            </DialogTrigger>
          </div>
        </DialogHeader>
      </DialogContent>
    </>
  );
};

export default Tiktok;
