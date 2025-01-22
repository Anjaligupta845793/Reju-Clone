import React from "react";

const DisabledCard = ({ type }) => {
  const themetype = {
    light: {
      CardColor: "#FFFFFF",
      BackgroundColor: "#e1e1e1",
      Typography: "#121212",
    },
    dark: {
      CardColor: "#000000",
      BackgroundColor: "#1d1d1d",
      Typography: "#FFFFFF",
    },
  };

  return (
    <div className="p-4 opacity-50 grayscale cursor-not-allowed">
      <h1 className="text-lg font-semibold mb-2 text-gray-500">Card Color</h1>
      <div className="border border-gray-700 px-3 py-2 flex items-center gap-2 rounded-md">
        <div
          className="w-10 h-10 rounded-full border border-white"
          style={{ backgroundColor: themetype[type]?.CardColor }}
        ></div>
        <input
          type="text"
          readOnly
          value={themetype[type]?.CardColor}
          className="bg-transparent text-gray-500  px-2 py-1 rounded-md w-24 text-center"
        />
      </div>

      <h1 className="text-lg font-semibold mt-4 mb-2 text-gray-500">
        Background Color
      </h1>
      <div className="border border-gray-700 px-3 py-2 flex items-center gap-2 rounded-md">
        <div
          className="w-10 h-10 rounded-full border border-white"
          style={{ backgroundColor: themetype[type]?.BackgroundColor }}
        ></div>
        <input
          type="text"
          readOnly
          value={themetype[type]?.BackgroundColor}
          className="bg-transparent text-gray-500  px-2 py-1 rounded-md w-24 text-center"
        />
      </div>

      <h1 className="text-lg font-semibold mt-4 mb-2 text-gray-500">
        Typography & Icon Color
      </h1>
      <div className="border border-gray-700 px-3 py-2 flex items-center gap-2 rounded-md">
        <div
          className="w-10 h-10 rounded-full border border-white"
          style={{ backgroundColor: themetype[type]?.Typography }}
        ></div>
        <input
          type="text"
          readOnly
          value={themetype[type]?.Typography}
          className="bg-transparent text-gray-500  px-2 py-1 rounded-md w-24 text-center"
        />
      </div>
      {/* Module Overlay */}
      <div className="mt-5">
        <h1 className="text-xl">Module Overlay</h1>
        {/* Light Card */}
        <div className="flex gap-3 mt-3">
          <div>
            <h1 className="mb-2 text-gray-400 text-[14px]">Lighten</h1>
            <div
              className={`bg-[#1d1d1d] border-[1px] p-2 rounded-lg  ${
                type === "dark" ? " border-green-500" : "border-[#303031]"
              }`} //
            >
              {/*  */}
              <div className="w-9 h-9 rounded-full bg-white "></div>
            </div>
          </div>

          <div>
            <h1 className="mb-2 text-gray-400 text-[14px]">Darken</h1>
            <div
              className={`bg-[#1d1d1d] border-[1px] p-2 rounded-lg  ${
                type === "light" ? " border-green-500" : "border-[#303031]"
              }`}
            >
              <div className="w-9 h-9 rounded-full bg-black "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisabledCard;
