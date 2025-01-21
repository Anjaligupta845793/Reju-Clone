import React, { useState, useEffect, useContext } from "react";
import { ProfileBuilderContext } from "@/app/Context/ContextProvider";

const ToggleSwitch = () => {
  const { profile, toggleDisplayButton } = useContext(ProfileBuilderContext);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (profile && profile.displayNameOrLogo !== undefined) {
      setIsOn(profile.displayNameOrLogo);
    }
  }, [profile]);

  const toggleSwitch = async () => {
    try {
      const newState = !isOn;
      await toggleDisplayButton(newState);
      setIsOn(newState);
    } catch (error) {
      console.error("Error updating display state:", error);
    }
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
