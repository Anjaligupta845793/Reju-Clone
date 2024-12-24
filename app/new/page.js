"use client";
import AddContentCard from "@/components/AddContentCard";
import React from "react";
import { addcontentdata } from "../Data/addcontent";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const creatNewModelHandler = async (type) => {
    const response = await fetch("/api/postmodel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: type,
        title: "New Module",
        visible: "true",
      }),
    });
    router.push("/");
  };
  return (
    <div className="p-10 bg-black text-white h-full">
      <div className="flex gap-2 md:text-xl ">
        <h1>⇦</h1>
        <h1 className="font-semibold">Add Content</h1>
      </div>
      <div className="pt-10">
        {addcontentdata.map((item, index) => (
          <AddContentCard
            item={item}
            key={index}
            create={creatNewModelHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
