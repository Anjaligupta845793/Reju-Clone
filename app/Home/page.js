"use client";
import React from "react";
import { useContext } from "react";
import { ProfileBuilderContext } from "../Context/ContextProvider";

const Page = () => {
  const { context, setcont } = useContext(ProfileBuilderContext);
  console.log(context);
  const getRequestHandler = async () => {
    try {
      const response = await fetch("/api/addModelCard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: "1",
          cardData: { title: "anjali", subtitle: "blockchain dev" },
        }), //if you do not want to send any addional data,
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
