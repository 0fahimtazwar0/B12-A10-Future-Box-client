import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import SectionTitle from "../components/SectionTitle";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import DataLoadError from "../components/DataLoadError";
import Loading from "../components/Loading";
import useAxios from "../hooks/useAxios";

const AllBooks = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sort, setSort] = useState("date");
  const [sortDir, setSortDir] = useState("des");
  const axiosInstance = useAxios();
  useEffect(() => {
    axiosInstance
      .get("/all-books")
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const sortedData = [...data].sort((a, b) => {
    let result = 0;
    if (sort === "date")
      result = new Date(a.created_at) - new Date(b.created_at);
    if (sort === "rating") result = a.rating - b.rating;
    if (sort === "name") result = a.title.localeCompare(b.title);
    return sortDir === "asc" ? result : -result;
  });
  return (
    <div className='w-full  max-w-(--max-width) mx-auto flex flex-col p-(--padding)'>
      <div className='relative flex flex-col gap-8'>
        <SectionTitle>All Books</SectionTitle>
        <div className='bg-base-200 p-2 pr-3 md:absolute w-full md:w-fit  top-1/2 -translate-y-1/2 right-0 rounded-full flex gap-3 h-fit justify-between'>
          <select
            defaultValue='date'
            className='select rounded-full'
            onChange={(e) => {
              setSort(e.target.value);
            }}
          >
            <option value='rating'>Rating</option>
            <option value='date'>Date</option>
            <option value='name'>Name</option>
          </select>
          <div className='flex justify-center items-center'>
            <input
              type='radio'
              name='radio1'
              id='des'
              className='radio bg-base-100 radio-accent border-2'
              defaultChecked
              onClick={() => {
                setSortDir("des");
              }}
            />
            <FaAngleDoubleDown className='text-2xl text-neutral' />
            <input
              type='radio'
              name='radio1'
              id='asc'
              className='radio bg-base-100 ml-1.5 radio-accent border-2'
              onClick={() => {
                setSortDir("asc");
              }}
            />
            <FaAngleDoubleUp className='text-2xl text-neutral' />
          </div>
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : error ? (
        <DataLoadError>{error}</DataLoadError>
      ) : !data.length ? (
        <DataLoadError emoji='🫤'>No books have been created yet</DataLoadError>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5'>
          {sortedData?.map((single, index) => {
            return <Card single={single} key={index} />;
          })}
        </div>
      )}
    </div>
  );
};

export default AllBooks;
