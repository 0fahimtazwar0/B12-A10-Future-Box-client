import React from "react";
import flyingBook from "/src/assets/flying-book.png";
import "./Banner.css";

import { SparklesText } from "/src/components/ui/sparkles-text";
import { AuroraText } from "/src/components/ui/aurora-text";
import { TextAnimate } from "/src/components/ui/text-animate";
import { TextGenerateEffect } from "/src/components/ui/shadcn-io/text-generate-effect/index.jsx";
import { BlurFade } from "/src/components/ui/blur-fade";
import BlurText from "/src/components/ui/shadcn-io/blur-text/index.jsx";

const Banner = () => {
  return (
    <div className='bg-[url(/src/assets/banner-background.png)] bg-cover bg-no-repeat flex items-center min-h-screen lg:pt-60'>
      <div
        className={`mx-auto h-fit flex flex-col justify-center relative max-w-(--max-width)`}
      >
        <img
          src={flyingBook}
          alt='Flying-Book'
          className='w-64 xl:w-80 hidden lg:flex lg:absolute top-[-200px] right-0 2xl:right-15 select-none float-img'
        />
        <div className='text-center lg:text-left font-heading size-heading font-semibold '>
          <p className='flex items-center justify-center lg:justify-start'>
            A&nbsp;
            <BlurFade duration={1} direction='right' inView>
              <SparklesText className='text-primary font-extrabold size-heading'>
                <AuroraText>Curated</AuroraText>
              </SparklesText>
            </BlurFade>
            &nbsp;Library
          </p>
          <div className='flex items-center justify-center lg:justify-end'>
            for&nbsp;
            <BlurFade duration={1} direction='right' inView>
              <SparklesText className='text-primary font-extrabold size-heading'>
                <AuroraText>Curious</AuroraText>
              </SparklesText>
            </BlurFade>
            &nbsp;Minds.
          </div>
        </div>

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
          <TextGenerateEffect
            words='Book Haven is your peaceful escape into the world of stories.
            Explore beautifully curated titles, discover new favorites, enjoy a
            seamless reading experience and Immerse yourself in a curated
            collection crafted for curious and passionate readers. At Book
            Haven, every book is chosen to spark imagination, inspire thought,
            and enrich your reading journey.'
            duration={1.5}
            animateBy='words'
            staggerDelay={0.02}
            filter={true}
            className='text-lg xl:text-xl text-justify font-paragraph font-normal'
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
