"use client";
import { addcontentdata } from "@/app/Data/addcontent";
import React from "react";

import { useRouter } from "next/navigation";
import Throne from "./DialogBoxes/Throne";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AddContentCard = ({ item, create }) => {
  return (
    <div className="w-full">
      <div>
        <p className="pl-5 text-gray-400 text-[13px]">{item.heading}</p>
        <div className=" px-5 py-3 grid md:grid-cols-3  grid-cols-1 gap-3">
          {item.cards.map((card, index) => {
            if (
              card.title == "Throne Wishlist" ||
              card.title == "BandsInTown"
            ) {
              return (
                <div
                  key={card.id}
                  className="bg-gradient-to-r w-full from-black via-[#303031] to-black p-4 border-[1px] border-[#303031] rounded-lg font-semibold   "
                >
                  <Dialog className="">
                    <DialogTrigger>
                      <div className=" flex gap-4" key={index}>
                        {" "}
                        <card.icon size={28} />
                        <div>
                          <h1 className="text-[15px] text-left">
                            {card.title}
                          </h1>
                          <p className="text-[13px]">{card.subtitle}</p>
                        </div>
                      </div>
                    </DialogTrigger>
                    <Throne title={card.title} />
                  </Dialog>
                </div>
              );
            } else {
              return (
                <div
                  className="bg-gradient-to-r from-black via-[#303031] font-semibold to-black p-4 border-[1px] border-[#303031] rounded-lg flex gap-4"
                  onClick={() => create(card.title, card.button)}
                  key={index}
                >
                  {" "}
                  <card.icon size={28} />
                  <div>
                    <h1 className="text-[15px]">{card.title}</h1>
                    <p className="text-[13px]">{card.subtitle}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default AddContentCard;
