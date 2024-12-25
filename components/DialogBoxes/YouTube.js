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

const YouTube = ({ id }) => {
  const { setmodule, module } = useContext(ProfileBuilderContext);
  const [url, seturl] = useState("");
  const [thumbnailURL, setthumbnailURL] = useState("");
  function getYouTubeVideoID(url) {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }
  const fetchUrlImage = async () => {
    console.log(url);
    const vedioId = getYouTubeVideoID(url);
    console.log(vedioId);
    const thumbnailURL = `https://img.youtube.com/vi/${vedioId}/hqdefault.jpg`;

    setthumbnailURL(thumbnailURL);
    const response = await fetch("/api/addModelCard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        cardData: {
          image: thumbnailURL,
          title: "Harry Bhai vedio",
          subtitle: url,
        },
      }),
    });
    const data = await response.json();
    setmodule(data.data);
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
            />
            <DialogTrigger
              className="bg-yellow-500 px-5 py-2 rounded-full text-black mt-4  "
              onClick={fetchUrlImage}
            >
              Done
            </DialogTrigger>
          </div>
        </DialogHeader>
      </DialogContent>
    </>
  );
};

export default YouTube;
