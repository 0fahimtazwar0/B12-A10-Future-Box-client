import React from "react";
import Card from "../components/Card/Card";
import sampleData from "/public/data/sampleData.json";
import SectionTitle from "../components/SectionTitle";

const AllBooks = () => {
  return (
    <div className='w-full  max-w-(--max-width) mx-auto flex flex-col p-(--padding) mt-16'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {sampleData.map((single, index) => {
          return <Card single={single} key={index} />;
        })}
      </div>
    </div>
  );
};

export default AllBooks;
