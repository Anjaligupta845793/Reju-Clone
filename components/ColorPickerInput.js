import { ProfileBuilderContext } from "@/app/Context/ContextProvider";
import { useContext, useState, useEffect } from "react";

export default function ColorPicker() {
  const { changeTheme, profile } = useContext(ProfileBuilderContext);
  const [cardColor, setcardColor] = useState("#000000");
  const [bgColor, setbgColor] = useState("#1d1d1d");
  const [typoColor, settypoColor] = useState("#FFFFFF");
  const [module, setmodule] = useState("lighten");

  useEffect(() => {
    if (profile && profile.theme) {
      setcardColor(profile.theme.cardColor || "#000000");
      setbgColor(profile.theme.backgroundColor || "#1d1d1d");
      settypoColor(profile.theme.TypographyandIconColor || "#FFFFFF");
      setmodule(profile.theme.moduleOverlay || "lighten");
    }
  }, [profile]);

  const ColordHandler = async (e) => {
    e.preventDefault();
    const colorValue = e.target.value;
    console.log("Card color changed:", colorValue); // Check if this logs
    setcardColor(colorValue);
    changeTheme("cardColor", colorValue);
  };

  const BgHandler = async (e) => {
    e.preventDefault();
    const bgColorValue = e.target.value;
    console.log("Background color changed:", bgColorValue); // Check if this logs
    setbgColor(bgColorValue);
    changeTheme("backgroundColor", bgColorValue);
  };

  const TypoHandler = async (e) => {
    e.preventDefault();
    const typoColorValue = e.target.value;
    console.log("Typography color changed:", typoColorValue); // Check if this logs
    settypoColor(typoColorValue);
    changeTheme("TypographyandIconColor", typoColorValue);
  };
  const ModuleHandler = async (type) => {
    setmodule(type);
    changeTheme("moduleOverlay", type);
  };

  return (
    <div>
      <h1 className="text-xl mt-5">Colors</h1>
      <h1 className="mt-2">Card Color</h1>

      <div className="flex items-center gap-2  p-2 rounded-lg w-full">
        {/* Color Picker Circle */}
        <input
          type="color"
          value={cardColor}
          onChange={(e) => ColordHandler(e)}
          className="w-8 h-8 bg-transparent border-none cursor-pointer"
        />

        {/* Color Value Input */}
        <input
          type="text"
          value={cardColor}
          readOnly
          className="bg-[#1E1E1E] w-full text-white border  p-2 rounded-md outline-none text-sm  "
        />
      </div>
      <h1 className="mt-5">Background Color</h1>
      <div className="flex items-center gap-2  p-2 rounded-lg w-full">
        {/* Color Picker Circle */}
        <input
          type="color"
          value={bgColor}
          onChange={(e) => BgHandler(e)}
          className="w-8 h-8 bg-transparent border-none cursor-pointer"
        />

        {/* Color Value Input */}
        <input
          type="text"
          value={bgColor}
          readOnly
          className="bg-[#1E1E1E] w-full text-white border  p-2 rounded-md outline-none text-sm  "
        />
      </div>
      <h1 className="mt-5">Typography & Icon Color</h1>
      <div className="flex items-center gap-2  p-2 rounded-lg w-full">
        {/* Color Picker Circle */}
        <input
          type="color"
          value={typoColor}
          onChange={(e) => TypoHandler(e)}
          className="w-8 h-8 bg-transparent border-none cursor-pointer"
        />

        {/* Color Value Input */}
        <input
          type="text"
          value={typoColor}
          readOnly
          className="bg-[#1E1E1E] w-full text-white border  p-2 rounded-md outline-none text-sm  "
        />
      </div>
      <div className="mt-5">
        <h1 className="text-xl">Module Overlay</h1>
        {/* Light Card */}
        <div className="flex gap-3 mt-3">
          <div>
            <h1 className="mb-2 text-gray-400 text-[14px]">Lighten</h1>
            <div
              className={`bg-[#1d1d1d] border-[1px] p-2 rounded-lg  ${
                module == "lighten" ? " border-green-500" : "border-[#303031]"
              }`}
              onClick={() => ModuleHandler("lighten")}
            >
              {/*  */}
              <div className="w-9 h-9 rounded-full bg-white "></div>
            </div>
          </div>
          {/* Dark Card */}
          <div>
            <h1 className="mb-2 text-gray-400 text-[14px]">Darken</h1>
            <div
              className={`bg-[#1d1d1d] border-[1px] p-2 rounded-lg  ${
                module == "darken" ? " border-green-500" : "border-[#303031]"
              } `}
              onClick={() => ModuleHandler("darken")}
            >
              <div className="w-9 h-9 rounded-full bg-black "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
