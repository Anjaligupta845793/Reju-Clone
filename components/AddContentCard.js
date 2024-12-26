"use client";
import { addcontentdata } from "@/app/Data/addcontent";
import React from "react";
import { MdInsertLink } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { IoIosMusicalNote } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { BsTicketPerforated } from "react-icons/bs";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

import { PiHandsPraying } from "react-icons/pi";
import { FaCrown } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const AddContentCard = ({ item, create }) => {
  return (
    <div className="w-full">
      <div>
        <p className="pl-5 text-gray-400 text-[13px]">{item.heading}</p>
        <div className=" px-5 py-3 grid md:grid-cols-3  grid-cols-1 gap-3">
          {item.cards.map((card, index) => (
            <div
              className="bg-gradient-to-r from-black via-[#303031] font-semibold to-black p-4 border-[1px] border-[#303031] rounded-lg"
              onClick={() => create(card.title, card.button)}
              key={index}
            >
              <h1 className="text-[15px]">{card.title}</h1>
              <p className="text-[13px]">{card.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddContentCard;
