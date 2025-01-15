import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import FileInput from "../FileInput";
import axios from "axios";

const Link = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [image, setimage] = useState("");

  const formdata = new FormData();
  formdata.append("image", image);

  const onchangeHandler = (e) => {
    setimage(e.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await axios.post("/api/upload-image", formdata);
    console.log(data);
    console.log(image);
  };

  return (
    <>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Link</DialogTitle>

          <form onSubmit={handleSubmit} className="flex flex-col p-10">
            <div className="flex justify-center flex-col text-center">
              <FileInput image={image} onchange={onchangeHandler} />
              <h1 className="mt-10">Thumbnail Photo</h1>
              <p className="text-[14px]">
                Use a size that’s at least 369 x 369 pixels and 6MB or less
              </p>
            </div>

            <label htmlFor="title" className="text-[15px] py-2 my-1">
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Enter title of Link"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-2 rounded bg-[#1d1d1d] text-gray-400 text-[15px] border-[1px] border-[#303031] w-full mb-[30px]"
            />

            <label htmlFor="url" className="text-[15px] py-2">
              URL
            </label>
            <input
              id="url"
              type="url"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="p-2 rounded bg-[#1d1d1d] text-gray-400 text-[15px] border-[1px] border-[#303031] w-full mb-[30px]"
            />

            <div className="flex gap-2">
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
        </DialogHeader>
      </DialogContent>
    </>
  );
};

export default Link;
