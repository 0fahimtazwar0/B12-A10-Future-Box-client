import React, { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card/Card";
import useAxios from "../hooks/useAxios";
// import sampleData from "/public/data/sampleData.json";

const LatestBooks = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const axiosInstance = useAxios();

  useEffect(() => {
    axiosInstance
      .get("/latest-books")
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []); // ← empty array ensures this runs only once on mount

  return (
    <div>
      <SectionTitle>Latest Books</SectionTitle>
      {loading ? (
        <div className='flex justify-center items-center mt-16 min-h-28'>
          <span className='loading loading-ring size-20'></span>
        </div>
      ) : error ? (
        <div className='text-4xl flex justify-center items-center font-bold text-neutral font-heading mt-16  min-h-28 text-center p-(--padding)'>
          {error} 😞
        </div>
      ) : !data.length ? (
        <div className='text-4xl flex justify-center items-center font-bold text-neutral font-heading mt-16  min-h-28 text-center p-(--padding)'>
          No books have been created yet 🫤
        </div>
      ) : (
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {data.map((single, index) => {
            return <Card single={single} key={index} />;
          })}
        </div>
      )}
    </div>
  );
};

export default LatestBooks;
