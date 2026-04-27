import React, { useEffect, useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { MagicCard } from "/src/components/ui/magic-card";
import { Backlight } from "/src/components/ui/backlight";
import { useNavigate } from "react-router";

const MyBooks = () => {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/all-books")
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

  const handleDelete = (id) => {
    console.log("delete id", id);
    fetch(`http://localhost:3000/delete-book/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after delete", data);
      });
  };

  const handleEdit = (id) => {
    navigate(`/update-book/${id}`);
  };
  return (
    <>
      <MagicCard
        gradientColor='var(--color-purple-300)'
        className='rounded-box mt-20 w-full max-w-[1440px] mx-auto bg-[#fff8eb] shadow-[15px_15px_30px_#d7cdbd,-15px_-15px_30px_rgb(255,255,255,0.5)]'
      >
        <ul className='list w-full'>
          {/* <li className='p-4 pb-2 text-xs opacity-60 tracking-wide'>
        Most played songs this week
      </li> */}
          {data?.map((single) => {
            return (
              <li className='list-row' key={single._id}>
                {/* <Backlight blur='5'> */}
                <div className='hover-3d'>
                  <img
                    className='w-20 sm:w-24 rounded-box object-fill aspect-2/3 shadow-[5px_5px_20px_gray]'
                    src={single.coverImage}
                  />
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                {/* </Backlight> */}
                <div className='flex flex-col'>
                  <div className='text-lg sm:text-xl md:text-2xl font-semibold font-heading max-w-[90%]'>
                    {single.title}
                  </div>
                  <div>{single.author}</div>
                </div>
                <div className='flex flex-col gap-3.5 items-stretch justify-center'>
                  <button
                    className='btn btn-accent flex gap-2 btn-ghost btn-square sm:btn-wide sm:px-2'
                    onClick={() => handleEdit(single._id)}
                  >
                    <MdEdit className='text-xl' />
                    <span className='hidden sm:block'>Edit</span>
                  </button>
                  <button
                    className='btn btn-neutral btn-ghost btn-square sm:btn-wide sm:px-2'
                    onClick={() => handleDelete(single._id)}
                  >
                    <MdDelete className='text-xl' />

                    <span className='hidden sm:block'>Delete</span>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </MagicCard>
    </>
  );
};

export default MyBooks;
