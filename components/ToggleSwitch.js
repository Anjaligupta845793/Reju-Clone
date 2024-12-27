import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
        isOn ? "bg-yellow-500" : "bg-gray-400"
      }`}
      onClick={toggleSwitch}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
          isOn ? "translate-x-6" : ""
        }`}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
