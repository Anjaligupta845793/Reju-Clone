import React, { useState } from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import FileInput from "../FileInput";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Product = ({ id }) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [image, setimage] = useState("");
  const [price, setPrice] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState(""); // Initialize state

  const formdata = new FormData();
  formdata.append("image", image);
  formdata.append("url", url);
  formdata.append("title", title);
  formdata.append("price", price);
  formdata.append("currency", selectedCurrency);
  formdata.append("id", "6788a266b634419321fdfee1");

  const onchangeHandler = (e) => {
    setimage(e.target.files[0]);
  };

  const handleChange = (value) => {
    setSelectedCurrency(value);
    console.log("Selected currency:", value); // For debugging
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await axios.post("/api/modules/additems/addproduct", formdata);
    console.log("formdata", {
      image,
      url,
      price,
      selectedCurrency,
    });
    console.log(data);
  };

  return (
    <>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Link</DialogTitle>

          <form onSubmit={handleSubmit} className="flex flex-col p-5">
            <div className="flex justify-center flex-col text-center">
              <FileInput image={image} onchange={onchangeHandler} />
              <h1 className="mt-6">Thumbnail Photo</h1>
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
              className="p-2 rounded bg-[#1d1d1d] text-gray-400 text-[15px] border-[1px] border-[#303031] w-full mb-[10px]"
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
              className="p-2 rounded bg-[#1d1d1d] text-gray-400 text-[15px] border-[1px] border-[#303031] w-full mb-[10px]"
            />
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              <div>
                <label htmlFor="" className="mb-3">
                  Currency
                </label>
                <Select onValueChange={handleChange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue
                      placeholder={selectedCurrency || "Add a Currency"} // Show selected or placeholder
                    />
                  </SelectTrigger>
                  <SelectContent className="bg-black text-gray-400">
                    <SelectItem value="eur">€ - EUR - European Euro</SelectItem>
                    <SelectItem value="jpy">¥ - JPY - Japanese Yen</SelectItem>
                    <SelectItem value="gbp">£ - GBP - British Pound</SelectItem>
                    <SelectItem value="afs">
                      Afs - AFN - Afghan Afghani
                    </SelectItem>
                    <SelectItem value="l">L - ALL - Albanian Lek</SelectItem>
                    <SelectItem value="amd">
                      AMD - AMD - Armenian Dram
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="price" className="text-[15px] py-2 mb-2">
                  Price
                </label>
                <input
                  id="price"
                  type="text"
                  placeholder="Enter your price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="p-2 rounded bg-[#1d1d1d] text-gray-400 text-[15px] border-[1px] border-[#303031] w-full mb-[30px]"
                />
              </div>
            </div>

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

export default Product;
