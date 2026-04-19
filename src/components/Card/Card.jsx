import React from "react";
import "./Card.css";
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { AnimatedGradientText } from "/src/components/ui/animated-gradient-text";
import { InteractiveHoverButton } from "/src/components/ui/interactive-hover-button";
import { MagicCard } from "/src/components/ui/magic-card";

import { cn } from "@/lib/utils";
import Stars from "../Stars";

const Card = ({ single }) => {
  const { title, rating, author, coverImage, genre } = single;

  return (
    <MagicCard
      gradientColor='var(--color-purple-300)'
      className=' w-full h-full min-h-0 px-7 pt-8 rounded-[30px] bg-[#fff8eb] shadow-[15px_15px_30px_#d7cdbd,-15px_-15px_30px_rgb(255,255,255,0.5)] book-hover flex flex-col'
      flex='flex-col'
    >
      <div className='book-container'>
        <div className='book'>
          <img alt='' src={coverImage} />
        </div>
      </div>
      <div className=' pb-5 mt-7  w-full flex flex-col flex-1'>
        <div className='group relative w-fit rounded-full px-3 py-1 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]'>
          <span
            className={cn(
              "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-linear-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-size-[300%_100%] p-[2px]",
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
          <Stars rating={rating}></Stars>
          <span className='bg-purple-100 text-purple-800 border border-purple-200 flex justify-center items-center font-semibold px-2.5 py-0.5 rounded-sm ms-3'>
            {rating}
          </span>
        </div>
        <div className='flex flex-1'></div>
        <div className='flex w-full justify-stretch items-stretch'>
          <InteractiveHoverButton>View Details</InteractiveHoverButton>
        </div>
      </div>
    </MagicCard>
  );
};
// name,author,genre, rating, view details

export default Card;
