import React, { useState, useEffect } from "react";
import Image from "next/image";

const CardVideo = ({ item, profile }) => {
  const [thumbnailURL, setThumbnailURL] = useState("");
  const [title, setTitle] = useState("YouTube title");

  function getYouTubeVideoID(url) {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }

  useEffect(() => {
    if (item.url) {
      console.log(item.url);
      const videoId = getYouTubeVideoID(item.url);
      if (videoId) {
        setThumbnailURL(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
      }
    }
  }, [item.url]);

  return (
    <div
      className={` gap-5 ${item.visible ? "flex" : "hidden"} text-${
        profile.theme.TypographyAndIconColor
      } ${
        profile.theme.moduleOverlay === "lighten"
          ? "bg-[#FFFFFF] bg-opacity-10"
          : "bg-[#000000] bg-opacity-10"
      }`}
    >
      <div className="w-[80px] h-[80px] rounded-md overflow-hidden relative">
        <Image
          src={
            thumbnailURL ||
            "https://img.youtube.com/vi/3_L5mpF2bpM/hqdefault.jpg"
          }
          alt="image"
          layout="fill" // Makes the image take full width and height of the parent div
          objectFit="cover" // Ensures the image covers the div properly
        />
      </div>

      <div className="flex flex-col justify-center py-4 xl:w-[350px] lg:w-[190px] md:w-[200px] sm:w-[180px] w-[140px]">
        <h1 className={`text-[15px] font-bold  truncate`}>{title}</h1>
        <p className={`text-[13px] text-gray-400 truncate`}>{item.url}</p>
      </div>
    </div>
  );
};

export default CardVideo;
