import React from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { useState } from "react";
import axios from "axios";

const Throne = ({ title }) => {
  const [url, seturl] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/modules/add", {
      type: "Throne Wishlist",
      FormType: "Link",
    });
    console.log(response);
    const id = response.data.module._id;
    console.log("data", {
      url,
      id,
    });

    const data = await axios.post("/api/modules/additems/addThrone", {
      title: "Throne Wishlist",
      url,
      imageurl:
        "https://assets-global.website-files.com/651ed13529fb58a773686da0/651ed13529fb58a773686dd8_Throne_Icon_Square_White_on_Gradient.svg",
      id,
    });
    console.log(data);
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
              />
              <div className="flex gap-2 mt-4">
                <button
                  type="submit"
                  className="px-4 py-2 rounded-full text-black bg-yellow-500 "
                >
                  Done
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
