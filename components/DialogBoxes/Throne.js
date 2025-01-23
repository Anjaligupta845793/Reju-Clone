import React, { useContext } from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { useState } from "react";
import axios from "axios";
import { ProfileBuilderContext } from "@/app/Context/ContextProvider";
import Loader from "../Loader";

const Throne = ({ title, router }) => {
  const [url, seturl] = useState("");
  const { AddThroneItemHandler, formBtnloading } = useContext(
    ProfileBuilderContext
  );
  const submitHandler = async (e) => {
    e.preventDefault();
    AddThroneItemHandler(url, router);
    seturl("");
  };
  return (
    <div>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{`Add New ${title}`}</DialogTitle>

          <div>
            <form action="" className="p-6" onSubmit={submitHandler}>
              <p className="text-[14px]">{`${title} URL`}</p>

              <input
                type="text"
                placeholder="https://example.com"
                className="rounded-lg p-2 bg-[#1d1d1d] border-1 my-5 border-[#303031] w-full"
                onChange={(e) => seturl(e.target.value)}
                required
              />
              <div className="flex gap-2 mt-4">
                <button
                  type="submit"
                  className="px-4 py-2 rounded-full text-black bg-yellow-500 "
                >
                  {formBtnloading ? <Loader /> : "Done"}
                </button>
                <DialogClose asChild>
                  <button
                    type="button"
                    className="px-4 py-2 rounded-full text-black bg-gray-500 "
                  >
                    Cancel
                  </button>
                </DialogClose>
              </div>
            </form>
          </div>
        </DialogHeader>
      </DialogContent>
    </div>
  );
};

export default Throne;
