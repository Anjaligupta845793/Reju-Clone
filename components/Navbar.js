import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black text-white px-10 border-t-2 border-gray-700 ">
      <div className=" flex justify-between p-4">
        <div className="pt-2 ">Content</div>
        <div className="flex justify-between gap-4 text-gray-200">
          <div className=" pl-2 pr-20 rounded-md py-1 "> test.reju.pro</div>
          <h1 className="pt-2">Saved</h1>
          <button className="items-center  py-2 text-black bg-yellow-500 rounded-full">
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
