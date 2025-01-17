import React, { useContext } from "react";
import { ProfileBuilderContext } from "@/app/Context/ContextProvider";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { useState } from "react";
import Loader from "../Loader";
import { toast } from "react-hot-toast";

const Events = ({ id }) => {
  const { AddEventItemHandler, formBtnloading } = useContext(
    ProfileBuilderContext
  );
  const [date, setdate] = useState("");
  const [vanue, setvanue] = useState("");
  const [location, setlocation] = useState("");
  const [link, setlink] = useState("");

  const formdata = new FormData();
  formdata.append("date", date);
  formdata.append("vanue", vanue);
  formdata.append("location", location);
  formdata.append("link", link);
  formdata.append("id", id);

  const submitHandler = async (e) => {
    e.preventDefault();
    AddEventItemHandler(formdata, id);
    setdate("");
    setvanue("");
    setlocation("");
    setlink("");
    toast.name("this feature is not enabled yet")
  };

  return (
    <>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Custom Event</DialogTitle>

          <div className="">
            <form onSubmit={submitHandler}>
              <label htmlFor="" className="text-[15px] py-2">
                Event Date
              </label>
              <input
                type="date"
                className="p-2 rounded bg-[#1d1d1d] text-gray-400 text-[15px] border-[1px] border-[#303031] w-full mb-[30px]"
                value={date}
                onChange={(e) => setdate(e.target.value)}
                required
              />

              <label htmlFor="" className="text-[15px] py-2 my-6">
                Venue Name
              </label>
              <input
                type="text"
                className="p-2 rounded bg-[#1d1d1d] text-gray-400 text-[15px] border-[1px] border-[#303031] w-full mb-[30px]"
                value={vanue}
                onChange={(e) => setvanue(e.target.value)}
                required
              />
              <label htmlFor="" className="text-[15px] py-2 my-6">
                Location
              </label>
              <input
                type="text"
                className="p-2 rounded bg-[#1d1d1d] text-gray-400 text-[15px] border-[1px] border-[#303031] w-full mb-[30px]"
                value={location}
                onChange={(e) => setlocation(e.target.value)}
                required
              />
              <label htmlFor="" className="text-[15px] py-2 ">
                Ticket Link
              </label>
              <input
                type="link"
                className="p-2 rounded bg-[#1d1d1d] text-gray-400 text-[15px] border-[1px] border-[#303031] w-full mb-[30px]"
                value={link}
                onChange={(e) => setlink(e.target.value)}
                required
              />

              <div className="flex gap-2">
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
    </>
  );
};

export default Events;
