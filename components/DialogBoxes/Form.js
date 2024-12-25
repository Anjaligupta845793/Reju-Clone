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
  return (
    <>
      <DialogContent>
        <DialogTitle>Create a Data Capture Form</DialogTitle>
        <div className="flex ">
          <div></div>
          <div></div>
        </div>
      </DialogContent>
    </>
  );
};

export default Form;
