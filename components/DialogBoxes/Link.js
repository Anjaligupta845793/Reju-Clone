import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Link = () => {
  return (
    <>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Custom Event</DialogTitle>
          <DialogDescription className="py-5">
            <label htmlFor="" className="text-[15px] py-2">
              Event Date
            </label>
            <input
              type="date"
              className="p-2 rounded bg-[#1d1d1d] text-gray-400 text-[15px] border-[1px] border-[#303031] w-full mb-[30px]"
            />

            <label htmlFor="" className="text-[15px] py-2 my-6">
              Venue Name
            </label>
            <input
              type="text"
              className="p-2 rounded bg-[#1d1d1d] text-gray-400 text-[15px] border-[1px] border-[#303031] w-full mb-[30px]"
            />
            <label htmlFor="" className="text-[15px] py-2 my-6">
              Location
            </label>
            <input
              type="text"
              className="p-2 rounded bg-[#1d1d1d] text-gray-400 text-[15px] border-[1px] border-[#303031] w-full mb-[30px]"
            />
            <label htmlFor="" className="text-[15px] py-2 ">
              Ticket Link
            </label>
            <input
              type="link"
              className="p-2 rounded bg-[#1d1d1d] text-gray-400 text-[15px] border-[1px] border-[#303031] w-full mb-[30px]"
            />
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="even"
                id=""
                className="bg-[#1d1d1d] border-[1px] border-[#303031] w-5 h-5 rounded-lg"
              />
              <p className="text-[15px]">Mark the event as a sold out</p>
            </div>
            <div className="flex gap-2 mt-5 justify-end">
              <DialogTrigger className="px-5 py-3 rounded-full w-[130px]  bg-[#1d1d1d] border-[1px] border-[#303031]">
                Close
              </DialogTrigger>
              <DialogTrigger className="px-5 py-3 text-black w-[130px] rounded-full bg-yellow-500 border-[1px] border-[#303031]">
                Done
              </DialogTrigger>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </>
  );
};

export default Link;
