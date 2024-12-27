import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Throne = ({ title }) => {
  return (
    <div>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{`Add New ${title}`}</DialogTitle>

          <div>
            <p className="text-[14px]">{`${title} URL`}</p>

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
    </div>
  );
};

export default Throne;
