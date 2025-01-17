"use client";
import { useState } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useContext } from "react";
import { ProfileBuilderContext } from "@/app/Context/ContextProvider";

import React from "react";

import Loader from "../Loader";

const YouTube = ({ id }) => {
  const { AddYouTubeItemHandler, formBtnloading } = useContext(
    ProfileBuilderContext
  );
  const [url, seturl] = useState("");

  const fetchUrlImage = async () => {
    AddYouTubeItemHandler(id, url);

    seturl("");
  };
  return (
    <>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add YouTube Content</DialogTitle>
          <DialogDescription>Individual Video</DialogDescription>
          <div>
            <p className="text-[14px]">
              Please enter a link to a YouTube video.
            </p>
            <h1 className="pt-4 pb-1">URL</h1>
            <input
              type="text"
              value={url}
              onChange={(e) => seturl(e.target.value)}
              placeholder="https://example.com"
              className="rounded-lg p-2 bg-[#1d1d1d] border-1 border-[#303031] w-full"
              required
            />
            <DialogTrigger
              className="bg-yellow-500 px-5 py-2 rounded-full text-black mt-4  "
              onClick={fetchUrlImage}
            >
              {formBtnloading ? <Loader /> : "Done"}
            </DialogTrigger>
          </div>
        </DialogHeader>
      </DialogContent>
    </>
  );
};

export default YouTube;
