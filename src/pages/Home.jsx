import React from "react";
import Banner from "../sections/Banner/Banner";
import LatestBooks from "../sections/LatestBooks";
import BestBook from "../sections/BestBook";

const Home = () => {
  return (
    <div className='flex flex-col gap-20'>
      <div>
        <Banner />
        <hr />
      </div>
      <LatestBooks />
      <BestBook />
    </div>
  );
};

export default Home;
