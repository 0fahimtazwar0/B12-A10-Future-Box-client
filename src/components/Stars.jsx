import React from "react";
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";

const Stars = ({ rating }) => {
  const starStyles = "w-6 h-6 text-yellow-400";

  const fullStarNum = Math.trunc(rating);

  let halfStarNum = 0;
  if (fullStarNum != rating) {
    halfStarNum = 1;
  }

  const emptyStarNum = 5 - (fullStarNum + halfStarNum);

  const fullStars = [];
  for (let i = 0; i < fullStarNum; i++) {
    fullStars.push(<FaStar key={5645 + i} className={starStyles} />);
  }

  const halfStars = [];
  for (let i = 0; i < halfStarNum; i++) {
    fullStars.push(
      <FaRegStarHalfStroke
        key={5645 + fullStarNum + i}
        className={starStyles}
      />,
    );
  }

  const emptyStars = [];
  for (let i = 0; i < emptyStarNum; i++) {
    fullStars.push(
      <FaRegStar
        key={55 + fullStarNum + halfStarNum + i}
        className={starStyles}
      />,
    );
  }
  return (
    <div className='flex items-center space-x-1 rtl:space-x-reverse'>
      {fullStars}
      {halfStars}
      {emptyStars}
    </div>
  );
};

export default Stars;
