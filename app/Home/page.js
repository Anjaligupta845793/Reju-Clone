"use client";
import React from "react";
import { useContext } from "react";
import { ProfileBuilderContext } from "../Context/ContextProvider";

const Page = () => {
  const { context, setcont } = useContext(ProfileBuilderContext);
  console.log(context);
  return (
    <div className="h-screen lg:flex md:flex text-white py-20">
      <h1>this is context </h1>
      <button onClick={setcont}>setcontext</button>
    </div>
  );
};

export default Page;
