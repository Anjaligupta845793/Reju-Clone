"use client";
import React, { useState } from "react";

function ColorPickerInput() {
  const [color, setColor] = useState("#c6c10f");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="flex items-center space-x-2">
      {/* Color Picker */}
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        className="w-10 h-10 p-0 rounded-full border-none outline-none cursor-pointer"
      />
      {/* Text Input */}
      <input
        type="text"
        value={color}
        onChange={handleColorChange}
        className="w-full px-3 py-2 bg-transparent border border-gray-500 rounded-md text-white outline-none focus:ring-2 focus:ring-yellow-400"
      />
    </div>
  );
}

export default ColorPickerInput;
