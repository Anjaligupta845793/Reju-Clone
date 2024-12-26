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

const Link = () => {
  return (
    <>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Custom Event</DialogTitle>

          <div className="">
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
              <h1 className="text-[15px]">Mark the event as a sold out</h1>
              <DialogTrigger className="px-4 py-2 rounded-full text-black bg-yellow-500 my-5 md:ml-[580px]">
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
