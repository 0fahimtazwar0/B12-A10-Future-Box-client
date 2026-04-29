import React from "react";

const Loading = () => {
  return (
    <div className='flex justify-center items-center absolute top-0 right-0 h-screen w-full'>
      <span className='loading loading-ring size-20'></span>
    </div>
  );
};

export default Loading;
