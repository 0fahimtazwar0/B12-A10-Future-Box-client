import React from "react";
import SectionTitle from "../components/SectionTitle";
import { InteractiveHoverButton } from "/src/components/ui/interactive-hover-button";
import podiumImg from "/src/assets/podium.png";

const BestBook = () => {
  return (
    <div className='w-full flex flex-col'>
      <SectionTitle>Book of the Week</SectionTitle>

      <div className='grid grid-cols-1 md:grid-cols-2 justify-between gap-10 '>
        <div className='w-fit mt-20 mx-auto'>
          <div className='book-container float-img'>
            <div className='book'>
              <img
                alt='Book Image'
                src='https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg/250px-A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg'
              />
            </div>
          </div>
          <img src={podiumImg} className='w-md' />
        </div>
        <div className='flex flex-col gap-5 justify-center'>
          <h1 className='text-4xl font-heading font-medium'>
            A Song of Ice and Fire
          </h1>
          <p className='text-justify '>
            Step into the legendary realm of Westeros, where power, honor,
            betrayal, and magic intertwine in George R.R. Martin’s masterful
            storytelling. With unforgettable characters, rich world-building,
            and twists that will leave you breathless, this epic series stands
            as a pillar of modern fantasy literature.
          </p>
          <InteractiveHoverButton>View Details</InteractiveHoverButton>
        </div>
      </div>
    </div>
  );
};

export default BestBook;
