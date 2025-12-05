import React from "react";
import "./Card.css";
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { AnimatedGradientText } from "/src/components/ui/animated-gradient-text";
import { InteractiveHoverButton } from "/src/components/ui/interactive-hover-button";
import { MagicCard } from "/src/components/ui/magic-card";

import { cn } from "@/lib/utils";

const Card = () => {
  const { title, rating, author, coverImage, genre } = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    rating: "5",
    summary:
      "A powerful story about racial injustice and moral growth in the American South.",
    coverImage:
      "https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_.jpg",
    userEmail: "user1@example.com",
  };

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
      />
    );
  }

  const emptyStars = [];
  for (let i = 0; i < emptyStarNum; i++) {
    fullStars.push(
      <FaRegStar
        key={55 + fullStarNum + halfStarNum + i}
        className={starStyles}
      />
    );
  }

  return (
    <MagicCard
      gradientColor='var(--color-purple-300)'
      className='w-[400px] h-fit px-7 pt-8 rounded-[30px] bg-[#fff8eb] shadow-[15px_15px_30px_#d7cdbd,-15px_-15px_30px_rgb(255,255,255,0.5)] book-hover flex-col flex gap-10'
    >
      <div className='book-container'>
        <div class='book'>
          <img alt='' src={coverImage} />
        </div>
      </div>

      <div className=' pb-5 flex flex-col flex-1 w-full'>
        <div className='group relative w-fit rounded-full px-3 py-1 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]'>
          <span
            className={cn(
              "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-linear-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-size-[300%_100%] p-[2px]"
            )}
            style={{
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "destination-out",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "subtract",
              WebkitClipPath: "padding-box",
            }}
          ></span>
          <AnimatedGradientText className='font-bold text-sm'>
            {genre}
          </AnimatedGradientText>
        </div>

        <div className='mt-2.5'>
          <h5 className='text-xl font-semibold tracking-tight text-gray-900'>
            {title}
          </h5>
          <p>{author}</p>
        </div>

        <div className='flex items-center mt-2.5 mb-5'>
          <div className='flex items-center space-x-1 rtl:space-x-reverse'>
            {fullStars}
            {halfStars}
            {emptyStars}
          </div>
          <span className='bg-purple-100 text-purple-800 border border-purple-200 flex justify-center items-center font-semibold px-2.5 py-0.5 rounded-sm ms-3'>
            {rating}
          </span>
        </div>
        <div className='flex w-full justify-stretch items-stretch'>
          <InteractiveHoverButton>View Details</InteractiveHoverButton>
        </div>
      </div>
    </MagicCard>
  );
};
// name,author,genre, rating, view details

export default Card;
