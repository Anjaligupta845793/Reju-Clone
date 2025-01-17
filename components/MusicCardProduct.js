import React from "react";
import Image from "next/image";

const MusicCardProduct = ({ item }) => {
  return (
    <div className="flex gap-5 ">
      <div className="w-[80px] h-[80px] rounded-md overflow-hidden relative">
        <Image
          src={
            item.image?.url ||
            "https://img.youtube.com/vi/3_L5mpF2bpM/hqdefault.jpg"
          }
          alt="image"
          layout="fill" // Makes the image take full width and height of the parent div
          objectFit="cover" // Ensures the image covers the div properly
        />
      </div>

      <div className="flex flex-col justify-center py-4 xl:w-[350px] lg:w-[190px] md:w-[200px] sm:w-[180px] w-[140px] ">
        <h1 className="text-[15px] font-bold text-gray-300 truncate">
          {item.title}
        </h1>{" "}
        <div className="flex gap-2">
          {" "}
          <p className="text-[13px] text-white truncate">{item.currency}</p>
          <p className="text-[13px] text-white truncate">{item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default MusicCardProduct;
