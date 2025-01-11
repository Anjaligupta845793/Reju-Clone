import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-5 h-5 rounded-full border-2 border-gray-200 border-t-2 border-t-blue-500 animate-spin"></div>
    </div>
  );
};

export default Loader;
