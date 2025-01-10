import theme from "@/app/theme/page";
import React from "react";

const DisabledCard = ({ theme }) => {
  return (
    <div>
      <h1>Card Color</h1>
      <div className="border-[1px] border-[#303031] px-3 py-1 flex gap-2">
        <div
          className={`bg-[${theme.cardColor}] w-10 h-10 rounded-full border-[1px] border-white`}
        ></div>
        <h1>{theme.cardColor}</h1>
      </div>
      <h1>Background Color</h1>
      <div className="border-[1px] border-[#303031] px-3 py-1 flex gap-2 ">
        <div
          className={`bg-[${theme.backgroundcolor}] w-10 h-10 rounded-full border-[1px] border-white`}
        ></div>
        <h1>{theme.backgroundcolor}</h1>
      </div>
      <h1>Typo graphy and icon color</h1>
      <div className="border-[1px] border-[#303031] px-3 py-1 flex gap-2">
        <div
          className={`bg-[${theme.TyprgraphyAndIconColor}] w-10 h-10 rounded-full border-[1px] border-white `}
        ></div>
        <h1>{theme.TyprgraphyAndIconColor}</h1>
      </div>
    </div>
  );
};

export default DisabledCard;
