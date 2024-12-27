import React from "react";

const FileInput = () => {
  return (
    <div className="relative w-36 h-36 mx-auto border-[1px] border-dashed border-gray-500 hover:border-yellow-400 bg-[#1d1d1d] flex items-center justify-center rounded-lg cursor-pointer">
      <input
        type="file"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
      <span className="text-yellow-400 text-2xl">+</span>
    </div>
  );
};

export default FileInput;
