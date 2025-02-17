import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { RiExpandUpDownLine } from "react-icons/ri";
import { FaEyeSlash } from "react-icons/fa6";
import MusicCard from "./MusicCard";
import DiloageForm from "./DiloageForm";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useContext } from "react";
import { ProfileBuilderContext } from "@/app/Context/ContextProvider";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

const Column = ({ item, data }) => {
  const { moduleDeleteHandler, toggleVisibility, updateModuleName } =
    useContext(ProfileBuilderContext);
  //const [visible, setvisible] = useState(true);

  const visibilityHandler = async (id, visible) => {
    toggleVisibility(id, visible);
  };
  const deleteColumn = async (id) => {
    moduleDeleteHandler(id);
  };
  const moduleNameChangeHandler = async (e) => {
    e.preventDefault();
    updateModuleName(e.target.value, item._id);
  };

  return (
    <div
      className={`text-white
       
       bg-[#1d1d1d] border-1 rounded-2xl border-[1px] border-solid border-[#303031]`}
    >
      {/* Column Header */}
      <div className="flex justify-between border-b-[1px] px-4 md:py-6 py-4 items-center  border-[#303031]">
        <div className="flex gap-1 ">
          <input
            type="text"
            placeholder={item.name}
            className="bg-[#1d1d1d] text-[15px] text-white w-[90px] focus:w-[200px] border-b-[1px] border-transparent focus:border-b-[#303031] outline-none  transition-all duration-300 ease-in-out"
            onChange={moduleNameChangeHandler}
          />

          <p className="text-[14px] bg-[#303031] rounded-full min-w-[100px] px-4 py-1">
            {`${item.type}`}
          </p>
        </div>
        <div className="flex gap-2">
          {item.visible ? (
            <MdOutlineRemoveRedEye
              size={25}
              onClick={() => visibilityHandler(item._id, item.visible)}
              className="cursor-pointer"
            />
          ) : (
            <FaEyeSlash
              size={25}
              onClick={() => visibilityHandler(item._id, item.visible)}
              className="cursor-pointer"
            />
          )}

          <Popover>
            <PopoverTrigger>
              <BsThreeDots size={25} />
            </PopoverTrigger>
            <PopoverContent>
              <button onClick={() => deleteColumn(item._id)}>Delete</button>
            </PopoverContent>
          </Popover>
          <RiExpandUpDownLine size={25} />
        </div>
      </div>
      {/* Cards Section */}
      <div className="p-4">
        <div className="flex gap-2 pt-2 px-3">
          <Dialog className="">
            <DialogTrigger>
              <CiCirclePlus size={28} className="text-yellow-500 font-bold" />
            </DialogTrigger>
            <DiloageForm title={item.FormType} id={item._id} />
          </Dialog>
          <p className="text-[14px] text-yellow-500 py-[2px]">{`Add New ${item.type}`}</p>
        </div>

        <div>
          {item.items && item.items.length > 0 ? (
            item.items.map((card, index) => (
              <MusicCard
                item={card}
                key={index}
                id={item._id}
                itemid={card._id}
                type={item.type}
              />
            ))
          ) : (
            <div className="flex flex-col justify-center gap-3 text-center py-7">
              <h1 className="text-xl font-bold ">Nothing Here Yet</h1>
              <p className="text-gray-400">
                Click the button below to get started
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Column;
