"use client";
import React from "react";
import { createContext, useState } from "react";

export const ProfileBuilderContext = createContext();

export const ProfileBuilderProvider = ({ children }) => {
  const [context, setcontext] = useState("bye from context");
  const [module, setmodule] = useState([]);
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
      const response = await fetch("/api/get", {
        /* method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: "1",
          cardData: { title: "anjali", subtitle: "blockchain dev" },
        }) */
      });
      const data = await response.json();
      console.log(data);
      console.log(data.data);
      setmodule(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const postLinkItemHandler = async () => {
    try {
      const data = await axios.post("/api/upload-image", formdata);
      console.log(data);
      console.log(image);
    } catch (error) {}
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
      }}
    >
      {children}
    </ProfileBuilderContext.Provider>
  );
};
