import React from "react";
import flyingBook from "/src/assets/flying-book.png";
import "./Banner.css";

import { SparklesText } from "/src/components/ui/sparkles-text";
import { AuroraText } from "/src/components/ui/aurora-text";

const Banner = () => {
  return (
    <div className='bg-[url(/src/assets/banner-background.png)] bg-cover bg-no-repeat flex items-center min-h-screen lg:pt-60'>
      <div
        className={`mx-auto h-fit flex flex-col justify-center relative max-w-(--max-width)`}
      >
        <img
          src={flyingBook}
          alt='Flying-Book'
          className='w-sm hidden lg:flex lg:absolute top-[-300px] right-0 select-none'
        />
        <h1 className='text-center lg:text-left font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold '>
          <p className='relative z-10 flex items-center'>
            A&nbsp;
            <SparklesText className='text-primary font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl'>
              <AuroraText>Curated</AuroraText>
            </SparklesText>
            &nbsp;Library
          </p>
          <p className='text-center lg:text-right flex items-center justify-end'>
            for&nbsp;
            <SparklesText className='text-primary font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl'>
              <AuroraText>Curious</AuroraText>
            </SparklesText>
            &nbsp;Minds.
          </p>
        </h1>

        <div className='grid grid-cols-1 lg:grid-cols-2 mt-10 gap-2.5 '>
          <div>
            <hr className='mt-2 border' />
            <div className='flex justify-center items-center h-full gap-20 mt-2'>
              <button className='banner-btn' role='button'>
                All Books
              </button>
              <button className='banner-btn' role='button'>
                Create Book
              </button>
            </div>
          </div>
          <p className='text-lg xl:text-xl text-justify'>
            Book Haven is your peaceful escape into the world of stories.
            Explore beautifully curated titles, discover new favorites, enjoy a
            seamless reading experience and Immerse yourself in a curated
            collection crafted for curious and passionate readers. At Book
            Haven, every book is chosen to spark imagination, inspire thought,
            and enrich your reading journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
