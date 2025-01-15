import React, { useState } from "react";

const FileInput = ({ onchange, image }) => {
  return (
    <div className="relative w-36 h-36 mx-auto border-[1px] border-dashed border-gray-500 hover:border-yellow-400 bg-[#1d1d1d] flex items-center justify-center rounded-lg cursor-pointer">
      <input
        type="file"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onChange={onchange}
      />
      {/* Show image thumbnail if an image is selected */}
      {image ? (
        <img
          src={URL.createObjectURL(image)} // Create object URL for image preview
          alt="Thumbnail"
          className="w-full h-full object-cover rounded-lg"
        />
      ) : (
        // Show '+' symbol if no image is selected
        <span className="text-yellow-400 text-2xl">+</span>
      )}
    </div>
  );
};

export default FileInput;
