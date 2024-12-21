"use client";
import React from "react";
import { createContext, useState } from "react";

export const ProfileBuilderContext = createContext();

export const ProfileBuilderProvider = ({ children }) => {
  const [context, setcontext] = useState("bye from context");
  const [module, setmodule] = useState([]);
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
  const creatNewModelHandler = async () => {
    const response = await fetch("/api/postmodel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "YouTube Video Module",
        title: "New Module",
        visible: "true",
      }),
    });
  };
  return (
    <ProfileBuilderContext.Provider
      value={{ context, getRequestHandler, module, creatNewModelHandler }}
    >
      {children}
    </ProfileBuilderContext.Provider>
  );
};
