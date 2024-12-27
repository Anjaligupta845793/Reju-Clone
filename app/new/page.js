"use client";
import AddContentCard from "@/components/AddContentCard";
import React from "react";
import { addcontentdata } from "../Data/addcontent";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const creatNewModelHandler = async (type, button) => {
    const response = await fetch("/api/postmodel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: type,
        title: "New Module",
        button: button,
        visible: "true",
        cards: [],
      }),
    });
    router.push("/");
  };
  return (
    <div className="p-10 bg-black text-white h-full">
      <div className="flex gap-2 md:text-xl ">
        <h1 onClick={() => router.push("/")} className="cursor-pointer">
          ⇦
        </h1>
        <h1 className="font-semibold">Add Content</h1>
      </div>
      <div className="pt-10">
        {addcontentdata.map((item, index) => {
          return (
            <AddContentCard
              item={item}
              key={index}
              create={creatNewModelHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
