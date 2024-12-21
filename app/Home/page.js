"use client";
import React from "react";
import { useContext } from "react";
import { ProfileBuilderContext } from "../Context/ContextProvider";

const Page = () => {
  const { context, setcont } = useContext(ProfileBuilderContext);
  console.log(context);
  const getRequestHandler = async () => {
    try {
      const response = await fetch("/api/postmodel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Telling the server we are sending JSON data
        },
        body: JSON.stringify({ name: "anjali", role: "developer" }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen bg-white text-black py-20">
      <h1>Get request </h1>
      <button onClick={getRequestHandler}>GET</button>
    </div>
  );
};

export default Page;
