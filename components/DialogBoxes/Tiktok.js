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
          <DialogTitle>Add New Tiktok Video</DialogTitle>
          <DialogDescription>
            <input type="text" className="p-2 rounded " />
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <button>confirm</button>
        </DialogFooter>
      </DialogContent>
    </>
  );
};

export default Tiktok;
