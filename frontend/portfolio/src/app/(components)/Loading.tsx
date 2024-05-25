import React from "react";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full content-center items-center z-50">
      <div className="flex justify-center [&>*]:m-[0.5px]">
        <span className="inline-flex w-5 h-5 rounded-full bg-gray-300 opacity-50"></span>
        <span className="inline-flex w-5 h-5 rounded-full bg-gray-300 opacity-50"></span>
        <span className="inline-flex w-5 h-5 rounded-full bg-gray-300 opacity-50"></span>
      </div>
    </div>
  );
};

export default Loading;
