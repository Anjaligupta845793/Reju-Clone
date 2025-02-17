"use client";
import { useState, useContext } from "react";
import {
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { ProfileBuilderContext } from "@/app/Context/ContextProvider";
import Loader from "../Loader";
import React from "react";
import FileInput from "../FileInput";

const Form = ({ id }) => {
  const { AddLinkItemHandler, formBtnloading } = useContext(
    ProfileBuilderContext
  );
  const [title, settitle] = useState("");
  const [url, seturl] = useState("");
  const [image, setimage] = useState(null); // Set null for file input

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("url", url);
    formData.append("title", title);
    formData.append("id", id);

    AddLinkItemHandler(formData, id);

    // Reset form fields
    settitle("");
    seturl("");
    setimage(null);
  };

  const onchangeHandler = (e) => {
    setimage(e.target.files[0]);
  };

  return (
    <DialogContent>
      <DialogTitle>Create a Data Capture Form</DialogTitle>

      <div className="flex md:flex-row flex-col gap-3 max-h-[500px] overflow-y-scroll">
        <div className="max-w-[510px]">
          <h1 className="text-[18px]">Module Banner</h1>
          <p className="text-[14px] py-3">
            You can adjust the design of the module banner and preview how it
            will appear to your audience.
          </p>

          {/* Image Upload Section */}
          <div className="border-[1px] border-[#303031] rounded-lg mt-5">
            <h1 className="p-4 md:text-xl">Image</h1>
            <div className="flex justify-center flex-col text-center p-10">
              <FileInput image={image} onchange={onchangeHandler} required />
              <h1 className="mt-10">Thumbnail Photo</h1>
              <p className="text-[14px]">
                Use a size that’s at least 369 x 369 pixels and 6MB or less
              </p>
            </div>
          </div>

          {/* Content Form */}
          <div className="border-[1px] border-[#303031] rounded-lg mt-5 p-4">
            <h1 className="text-[19px]">Content</h1>

            <form onSubmit={submitHandler} className="mt-3">
              <label htmlFor="title" className="text-[15px]">
                Title
              </label>
              <input
                type="text"
                placeholder='Add a title, e.g. "Sign up for my email letter"'
                id="title"
                className="p-3 bg-[#1d1d1d] w-full rounded-lg border-[1px] border-[#303031] mb-5"
                value={title}
                onChange={(e) => settitle(e.target.value)}
                required
              />

              <label htmlFor="subtitle" className="text-[15px]">
                Subtitle
              </label>
              <input
                type="text"
                placeholder="Add a subtitle, e.g. Receive updates and exclusive content"
                id="subtitle"
                className="p-2 bg-[#1d1d1d] w-full rounded-lg border-[1px] border-[#303031] mb-5"
                value={url}
                onChange={(e) => seturl(e.target.value)}
                required
              />

              {/* Buttons inside the form */}
              <div className="flex gap-2 mt-4">
                <button
                  type="submit"
                  className="px-4 py-2 rounded-full text-black bg-yellow-500"
                >
                  {formBtnloading ? <Loader /> : "Done"}
                </button>

                <DialogClose asChild>
                  <button
                    type="button"
                    className="px-4 py-2 rounded-full text-black bg-gray-500"
                  >
                    Cancel
                  </button>
                </DialogClose>
              </div>
            </form>
          </div>
        </div>

        {/* Preview Section */}
        <div className="w-[380px] h-[220px] fixed top-20 right-14 md:block hidden">
          <h1>Content Module</h1>
          <div className="py-10 px-4 bg-black rounded-2xl">
            <div className="bg-[#1d1d1d] p-6 flex rounded-2xl">
              <div className="bg-white w-[100px] h-[100px] rounded-lg">
                {image ? (
                  <img
                    src={URL.createObjectURL(image)} // Create object URL for image preview
                    alt="Thumbnail"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : null}
              </div>
              <div className="ml-3">
                <h1 className="text-[16px] mt-5">{title}</h1>
                <h1 className="text-[16px]">{url}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
};

export default Form;
