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
          <DialogTitle>Add New Link</DialogTitle>
          <DialogDescription>
            <input type="text" className="p-2 rounded " />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </>
  );
};

export default Link;
