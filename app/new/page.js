"use client";
import AddContentCard from "@/components/AddContentCard";
import React from "react";
import { addcontentdata } from "../Data/addcontent";
import { useRouter } from "next/navigation";
import axios from "axios";

const Page = () => {
  const router = useRouter();

  const createNewModelHandler = async (type, button) => {
    try {
      const response = await axios.post("/api/modules/add", {
        type: type,
        FormType: button,
      });
      console.log(response);
      router.push("/");
    } catch (error) {
      console.error("Error in new page:", error);
      // Handle the error appropriately - maybe show a toast notification
      throw new Error("Failed to create new model");
    }
  };

  return (
    <div className="p-10 bg-black text-white h-full">
      <div className="flex gap-2 md:text-xl">
        <h1 onClick={() => router.push("/")} className="cursor-pointer">
          ⇦
        </h1>
        <h1 className="font-semibold">Add Content</h1>
      </div>
      <div className="pt-10">
        {addcontentdata.map((item, index) => (
          <AddContentCard
            item={item}
            key={index}
            create={createNewModelHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
