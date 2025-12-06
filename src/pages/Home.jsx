import React from "react";
import Banner from "../sections/Banner/Banner";
import LatestBooks from "../sections/LatestBooks";
import BestBook from "../sections/BestBook";
import TopGenres from "../sections/TopGenres";

const Home = () => {
  return (
    <div className='flex flex-col gap-20'>
      <div>
        <Banner />
        <hr />
      </div>
      <div className='w-full  max-w-(--max-width) mx-auto flex flex-col gap-20'>
        <LatestBooks />
        <BestBook />
        <TopGenres />
      </div>
    </div>
  );
};

export default Home;
