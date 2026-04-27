import React, { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card/Card";
// import sampleData from "/public/data/sampleData.json";

const LatestBooks = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/latest-books")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch books");
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []); // ← empty array ensures this runs only once on mount

  if (loading) return <p className='text-center mt-16'>Loading...</p>;
  if (error) return <p className='text-center mt-16 text-red-500'>{error}</p>;
  return (
    <div>
      <SectionTitle>Latest Books</SectionTitle>
      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {data.map((single, index) => {
          return <Card single={single} key={index} />;
        })}
      </div>
    </div>
  );
};

export default LatestBooks;
