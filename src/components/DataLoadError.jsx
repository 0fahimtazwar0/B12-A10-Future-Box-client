import React from "react";

const DataLoadError = ({ children, emoji }) => {
  return (
    <div className='absolute top-0 right-0 p-(--padding) text-center h-screen w-full text-4xl flex justify-center items-center font-bold text-neutral font-heading'>
      {children} {emoji || "😞"}
    </div>
  );
};

export default DataLoadError;
