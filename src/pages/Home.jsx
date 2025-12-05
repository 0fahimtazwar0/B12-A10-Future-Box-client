import React from "react";
import Banner from "../sections/Banner/Banner";
import LatestBooks from "../sections/LatestBooks";

const Home = () => {
  return (
    <div className='flex flex-col gap-20'>
      <div>
        <Banner />
        <hr />
      </div>
      <LatestBooks />
    </div>
  );
};

export default Home;
