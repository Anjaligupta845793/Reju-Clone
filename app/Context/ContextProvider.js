"use client";
import React from "react";
import { createContext, useState } from "react";

export const ProfileBuilderContext = createContext();

export const ProfileBuilderProvider = ({ children }) => {
  const [context, setcontext] = useState("bye from context");
  const setcont = () => {
    setcontext("hello from context");
  };
  return (
    <ProfileBuilderContext.Provider value={{ context, setcont }}>
      {children}
    </ProfileBuilderContext.Provider>
  );
};
