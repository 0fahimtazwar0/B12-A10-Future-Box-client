import React, { useEffect, useState } from "react";
import { MagicCard } from "/src/components/ui/magic-card";
import SectionTitle from "../components/SectionTitle";

const TopGenres = () => {
  const [col, setCol] = useState();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setCol(true);
      } else {
        setCol(false);
      }
    };

    handleResize(); // set on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className='flex flex-col gap-10'>
      <SectionTitle>Top Genres</SectionTitle>
      <MagicCard
        gradientColor='var(--color-purple-300)'
        className='list rounded-box justify-between w-full h-full min-h-0 px-7 pt-8 rounded-[30px] bg-[#fff8eb] shadow-[15px_15px_30px_#d7cdbd,-15px_-15px_30px_rgb(255,255,255,0.5)]'
        flex={col ? "flex-col" : "flex-row"}
      >
        {/* <ul className='list bg-base-100 rounded-box shadow-md flex-row justify-between'> */}
        <li className='list-row flex flex-col sm:flex-row flex-1 items-center'>
          <div className='text-6xl font-normal opacity-30 font-paragraph w-fit flex min-w-[75px] xl:min-w-0'>
            <span className='block xl:hidden 2xl:block'>0</span>1
          </div>

          <div className='hover-3d'>
            <figure>
              <img
                className='w-40 h-40 rounded-box aspect-square object-cover'
                src='https://img.freepik.com/free-photo/spectacular-sci-fi-landscape_23-2151954441.jpg'
              />
            </figure>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className='list-col-grow flex flex-col gap-5 max-w-[160px]'>
            <div className='font-heading text-4xl'>Fiction</div>
            <ul className='list-circle text-xs uppercase font-semibold opacity-60'>
              <li>To Kill a Mockingbird</li>
              <li>The Catcher in the Rye</li>
              <li>The Alchemist</li>
            </ul>
          </div>
        </li>
        <div className='divider-horizontal border'></div>
        <li className='list-row flex flex-col sm:flex-row flex-1 items-center'>
          <div className='text-6xl font-normal opacity-30 font-paragraph w-fit flex min-w-[75px] xl:min-w-0'>
            <span className='block xl:hidden 2xl:block'>0</span>2
          </div>
          <div className='hover-3d'>
            <figure>
              <img
                className='w-40 h-40 rounded-box aspect-square object-cover'
                src='https://img.freepik.com/free-photo/unicorn-outdoors-night_23-2149450938.jpg'
              />
            </figure>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className='list-col-grow flex flex-col gap-5 max-w-[160px]'>
            <div className='font-heading text-4xl'>Fantasy</div>
            <ul className='list-circle text-xs uppercase font-semibold opacity-60 w-fit'>
              <li>A Song of Ice and Fire</li>
              <li>The Hobbit</li>
              <li>Harry Potter and the Sorcerer's Stone</li>
            </ul>
          </div>
        </li>
        <div className='divider-horizontal border'></div>

        <li className='list-row flex flex-col sm:flex-row flex-1 items-center'>
          <div className='text-6xl font-normal opacity-30 font-paragraph w-fit flex min-w-[75px] xl:min-w-0'>
            <span className='block xl:hidden 2xl:block'>0</span>3
          </div>
          <div className='hover-3d'>
            <figure>
              <img
                className='w-40 h-40 rounded-box aspect-square object-cover'
                src='https://img.freepik.com/premium-photo/close-up-person-holding-red-umbrella_1048944-20859265.jpg'
              />
            </figure>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className='list-col-grow flex flex-col gap-5 max-w-[160px]'>
            <div className='font-heading text-4xl'>Thriller</div>
            <ul className='list-circle text-xs uppercase font-semibold opacity-60'>
              <li>The Da Vinci Code</li>
              <li>The Girl on the Train</li>
              <li>Remaining Reason</li>
            </ul>
          </div>
        </li>
        {/* </ul> */}
      </MagicCard>
    </div>
  );
};

export default TopGenres;
