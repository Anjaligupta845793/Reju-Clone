"use client";
import React from "react";
import { createContext, useState } from "react";
import { toast } from "react-hot-toast";
export const ProfileBuilderContext = createContext();
import axios from "axios";

export const ProfileBuilderProvider = ({ children }) => {
  const [formBtnloading, setformBtnloading] = useState(false);
  const [context, setcontext] = useState("bye from context");
  const [module, setmodule] = useState(null);
  const [displayNameOrLogo, setdisplayNameOrLogo] = useState(false);
  const [displayName, setdisplayName] = useState(true);
  const [displayLogo, setdisplayLogo] = useState(false);
  const [light, setlight] = useState(true);
  const [dark, setdark] = useState(false);
  const [custom, setcustom] = useState(false);
  const [colorTheme, setcolorTheme] = useState({
    cardColor: "#FFFFFF",
    backgroundcolor: "#e1e1e1",
    TyprgraphyAndIconColor: "#121212",
    ModuleOverlay: "Dark",
  });

  const [CustomCardtheme, setCustomCardtheme] = useState({
    cardColor: "#000000",
    backgroundcolor: "#1d1d1d",
    TyprgraphyAndIconColor: "#FFFFFF",
    ModuleOverlay: "Light",
  });

  const lightThemeHandler = () => {
    setcolorTheme({
      cardColor: "#FFFFFF",
      backgroundcolor: "#e1e1e1",
      TyprgraphyAndIconColor: "#121212",
      ModuleOverlay: "Dark",
    });
    setlight(true);
    setdark(false);
    setcustom(false);
  };

  const darkThemeHandler = () => {
    setcolorTheme({
      cardColor: "#000000",
      backgroundcolor: "#1d1d1d",
      TyprgraphyAndIconColor: "#FFFFFF",
      ModuleOverlay: "Light",
    });
    setlight(false);
    setdark(true);
    setcustom(false);
  };

  const customThemeHandler = () => {
    setlight(false);
    setdark(false);
    setcustom(true);
    setcolorTheme({
      ...CustomCardtheme,
    });
  };

  const toggleDisplayButton = async () => {
    setdisplayNameOrLogo(!displayNameOrLogo);
  };
  const textOnclick = () => {
    setdisplayName(true);
    setdisplayLogo(false);
  };
  const logoOnClick = () => {
    setdisplayName(false);
    setdisplayLogo(true);
  };

  const getRequestHandler = async () => {
    try {
      const response = await axios("/api/modules/get");
      const data = response.data.modules;

      setmodule(data);
    } catch (error) {
      console.log(error);
    }
  };

  const AddEventItemHandler = async (formdata, id) => {
    setformBtnloading(true);

    try {
      const data = await axios.post("/api/modules/additems/addEvent", formdata);
      console.log(data);

      const updatedModule = data.data.module;
      setmodule((prevmodule) =>
        prevmodule.map((mod) =>
          mod._id === id ? { ...mod, items: updatedModule.items } : mod
        )
      );

      setformBtnloading(false);
      toast.success("Item added successfully");
    } catch (error) {
      console.log("Error adding event item:", error);
      setformBtnloading(false);
      toast.error("Something went wrong, try again later");
    }
  };

  const AddLinkItemHandler = async (formdata, id) => {
    setformBtnloading(true);

    try {
      const data = await axios.post("/api/modules/additems/addLink", formdata);
      const updatedModule = data.data.module;

      // ✅ Step 4: Update state only if API call is successful
      setmodule((prevmodule) =>
        prevmodule.map((mod) =>
          mod._id === id ? { ...mod, items: updatedModule.items } : mod
        )
      );

      setformBtnloading(false);
      toast.success("Item added successfully");
    } catch (error) {
      console.log("Error adding link item:", error);
      setformBtnloading(false);
      toast.error("Something went wrong, try again later.");
    }
  };

  const AddProductItemHandler = async (formdata, id) => {
    setformBtnloading(true);

    // ✅ Step 3: Validate price to be a positive number
    if (isNaN(price) || price <= 0) {
      toast.error("Price must be a valid positive number.");
      setformBtnloading(false);
      return;
    }

    // ✅ Step 4: Validate URL format (if required for the product image or link)

    try {
      const data = await axios.post(
        "/api/modules/additems/addproduct",
        formdata
      );
      const updatedModule = data.data.module;

      setmodule((prevmodule) =>
        prevmodule.map((mod) =>
          mod._id === id ? { ...mod, items: updatedModule.items } : mod
        )
      );

      setformBtnloading(false);
      toast.success("Item added successfully");
    } catch (error) {
      console.log("Error adding product item:", error);
      setformBtnloading(false);
      toast.error("Something went wrong, try again later.");
    }
  };

  const AddThroneItemHandler = async (url) => {
    setformBtnloading(true);

    try {
      // Step 3: API call to create new Throne module
      const response = await axios.post("/api/modules/add", {
        type: "Throne Wishlist",
        FormType: "Link",
      });
      const id = response.data.module._id;

      // Step 4: API call to add Throne item with validated URL
      const data = await axios.post("/api/modules/additems/addThrone", {
        title: "Throne Wishlist",
        url,
        imageurl:
          "https://assets-global.website-files.com/651ed13529fb58a773686da0/651ed13529fb58a773686dd8_Throne_Icon_Square_White_on_Gradient.svg",
        id,
      });

      const updatedModule = data.data.module;
      setmodule((prevmodule) =>
        prevmodule.map((mod) =>
          mod._id === id ? { ...mod, items: updatedModule.items } : mod
        )
      );

      setformBtnloading(false);
      toast.success("Item added successfully!");
    } catch (error) {
      console.log("Error adding Throne item:", error);
      setformBtnloading(false);
      toast.error("Something went wrong, try again later.");
    }
  };
  const AddYouTubeItemHandler = async (id, url) => {
    setformBtnloading(true);

    try {
      // Step 3: API call to add YouTube item
      const response = await axios.post("/api/modules/additems/addVideo", {
        id,
        url,
      });

      const updatedModule = response.data.module;
      setmodule((prevmodule) =>
        prevmodule.map((mod) =>
          mod._id === id ? { ...mod, items: updatedModule.items } : mod
        )
      );

      setformBtnloading(false);
      toast.success("Item added successfully!");
    } catch (error) {
      console.log("Error adding YouTube item:", error);
      setformBtnloading(false);
      toast.error("Something went wrong, try again later.");
    }
  };

  const moduleDeleteHandler = async (id) => {
    try {
      const response = await axios.delete(`/api/modules/${id}`);

      setmodule((prevmodule) => prevmodule.filter((mod) => mod._id !== id));

      toast.success("module deleted successfully!");
    } catch (error) {
      console.log("Error removing model:", error);

      toast.error("Something went wrong, try again later.");
    }
  };

  const itemDeleteHandler = async (moduleid, itemid) => {
    try {
      const response = await axios.delete(`/api/modules/${moduleid}/${itemid}`);

      setmodule((prevModules) =>
        prevModules.map((mod) =>
          mod._id === moduleid
            ? {
                ...mod,
                items: mod.items.filter((item) => item._id !== itemid),
              }
            : mod
        )
      );

      toast.success("item deleted successfully!");
    } catch (error) {
      console.log("Error removing model:", error);

      toast.error("Something went wrong, try again later.");
    }
  };

  return (
    <ProfileBuilderContext.Provider
      value={{
        context,
        getRequestHandler,
        module,
        setmodule,
        displayLogo,
        displayName,
        displayNameOrLogo,
        toggleDisplayButton,
        textOnclick,
        logoOnClick,
        light,
        dark,
        custom,
        colorTheme,
        lightThemeHandler,
        darkThemeHandler,
        customThemeHandler,
        AddEventItemHandler,
        AddLinkItemHandler,
        AddProductItemHandler,
        AddThroneItemHandler,
        AddYouTubeItemHandler,
        moduleDeleteHandler,
        formBtnloading,
        itemDeleteHandler,
      }}
    >
      {children}
    </ProfileBuilderContext.Provider>
  );
};
