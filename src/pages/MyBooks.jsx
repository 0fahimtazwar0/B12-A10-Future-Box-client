import React, { use, useEffect, useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { MagicCard } from "/src/components/ui/magic-card";
import { useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import SectionTitle from "../components/SectionTitle";
import Loading from "../components/Loading";
import DataLoadError from "../components/DataLoadError";

const MyBooks = () => {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { user } = use(AuthContext);
  useEffect(() => {
    if (!user) return;

    fetch("http://localhost:3000/my-books", {
      method: "GET",
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch books");
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [user]); // ← empty array ensures this runs only once on mount

  if (loading) return <Loading />;
  if (error) return <DataLoadError>{error}</DataLoadError>;

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
    <div className='w-full  max-w-(--max-width) mx-auto flex flex-col p-(--padding)'>
      <SectionTitle>My Books</SectionTitle>

      <MagicCard
        gradientColor='var(--color-purple-300)'
        className='rounded-box mt-5 w-full max-w-[1440px] mx-auto bg-[#fff8eb] shadow-[15px_15px_30px_#d7cdbd,-15px_-15px_30px_rgb(255,255,255,0.5)]'
      >
        <ul className='list w-full'>
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
    </div>
  );
};

export default MyBooks;
