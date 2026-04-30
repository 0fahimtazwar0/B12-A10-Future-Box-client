import React, { useEffect, useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { MagicCard } from "/src/components/ui/magic-card";
import { useNavigate } from "react-router";
import SectionTitle from "../components/SectionTitle";
import Loading from "../components/Loading";
import DataLoadError from "../components/DataLoadError";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyBooks = () => {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (!user) return;

    axiosSecure
      .get("my-books")
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [user]); // ← empty array ensures this runs only once on mount

  const handleDelete = (id) => {
    // console.log("delete id", id);
    axiosSecure.delete(`/delete-book/${id}`).then(() => {
      // console.log("after delete", data);
      setData((prev) => prev.filter((single) => single._id !== id));
      toast.success("Successfully deleted book.");
    });
  };

  const handleEdit = (id) => {
    navigate(`/update-book/${id}`);
  };
  return (
    <div className='w-full  max-w-(--max-width) mx-auto flex flex-col p-(--padding)'>
      <SectionTitle>My Books</SectionTitle>
      {loading ? (
        <Loading />
      ) : error ? (
        <DataLoadError>{error}</DataLoadError>
      ) : !data.length ? (
        <DataLoadError emoji='🫤'>No books have been created yet</DataLoadError>
      ) : (
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
                    <div className='text-xs sm:text-base'>{single.author}</div>
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
                      onClick={() => {
                        document.getElementById("my_modal_2").showModal();
                        setDeleteId(single._id);
                      }}
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
      )}
      <dialog id='my_modal_2' className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>Are you sure?</h3>
          <form method='dialog' className='flex justify-between mt-10'>
            <button className='btn btn-neutral'>Cancel</button>
            <button
              className='btn btn-error bg-red-400 border-red-400'
              onClick={() => handleDelete(deleteId)}
            >
              Delete
            </button>
          </form>
        </div>
        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default MyBooks;
