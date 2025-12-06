import React from "react";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card/Card";
import sampleData from "/public/data/sampleData.json";

const LatestBooks = () => {
  return (
    <div>
      <SectionTitle>Latest Books</SectionTitle>
      <div className='mt-10 grid grid-cols-3 gap-10'>
        {sampleData.map((single, index) => {
          if (index < 6) {
            return <Card single={single} key={index} />;
          }
        })}
      </div>
    </div>
  );
};

export default LatestBooks;
