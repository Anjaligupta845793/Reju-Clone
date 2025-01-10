import React from "react";
import ColorPickerInput from "./ColorPickerInput";

const ThemeCard = () => {
  return (
    <div>
      <h1>Colors</h1>
      <label htmlFor="">Card Color</label>
      <ColorPickerInput />
    </div>
  );
};

export default ThemeCard;
