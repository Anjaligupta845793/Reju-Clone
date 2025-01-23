import React from "react";

import Image from "next/image";
import CardVideo from "./VedioCard";

const Module = ({ module, profile }) => {
  return (
    <div className={`overflow-hidden p-5 `}>
      {module &&
        module.map((mod, index) => (
          <div
            key={index}
            className={`mb-8 ${mod.visible ? "block" : "hidden"}`}
          >
            <h1 className={`text-xl font-bold  mb-4`}>{mod.name}</h1>
            {mod.items &&
              mod.items.length > 0 &&
              mod.items.map((item, index) => (
                <div
                  className="flex flex-wrap md:flex-nowrap gap-4 my-6 rounded-lg items-center border border-[#303031] overflow-hidden"
                  key={index}
                >
                  {mod.type === "Custom Product" ? (
                    /* Music product */
                    <div
                      className={`flex gap-5 ${
                        item.visible ? "flex" : "hidden"
                      }`}
                    >
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

                      <div
                        className={`flex flex-col ${
                          profile.theme.moduleOverlay === "lighten"
                            ? "bg-white bg-opacity-10"
                            : "bg-black bg-opacity-10"
                        }
                      justify-center py-4 xl:w-[350px] lg:w-[190px] md:w-[200px] sm:w-[180px] w-[140px]`}
                      >
                        <h1 className="text-[15px] font-bold  truncate">
                          {item.title}
                        </h1>{" "}
                        <div className="flex gap-2">
                          <p className="text-[13px] text-white truncate">
                            {item.currency}
                          </p>
                          <p className="text-[13px] text-white truncate">
                            {item.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : mod.type === "Youtube" || mod.type === "Tiktok" ? (
                    /* Video */
                    <CardVideo item={item} profile={profile} />
                  ) : (
                    <div
                      className={` gap-5 items-center w-full ${
                        item.visible ? "flex" : "hidden"
                      } ${
                        profile.theme.moduleOverlay === "lighten"
                          ? "bg-[#FFFFFF] bg-opacity-10"
                          : "bg-[#000000] bg-opacity-10"
                      }`}
                    >
                      {/* Image Wrapper */}
                      <div className="w-[80px] h-[80px] rounded-md overflow-hidden relative shrink-0">
                        <Image
                          src={
                            item.image?.url ||
                            "https://img.youtube.com/vi/3_L5mpF2bpM/hqdefault.jpg"
                          }
                          alt="image"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>

                      {/* Text Content */}
                      <div className="flex flex-col justify-center py-4 xl:w-[350px] lg:w-[190px] md:w-[200px] sm:w-[180px] w-[140px] overflow-hidden">
                        <h1 className="text-[15px] font-bold truncate">
                          {item.title}
                        </h1>
                        <p className="text-[13px]  truncate">{item.url}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        ))}
    </div>
  );
};

export default Module;
