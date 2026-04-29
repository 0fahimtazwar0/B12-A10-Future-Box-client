import React, { use, useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { AnimatedGradientText } from "/src/components/ui/animated-gradient-text";
import { ShineBorder } from "/src/components/ui/shine-border";
import { AuroraText } from "/src/components/ui/aurora-text";
import { cn } from "@/lib/utils";
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import Stars from "../components/Stars";
import SectionTitle from "../components/SectionTitle";
import podiumImg from "/src/assets/podium.png";
import { Link, useParams } from "react-router";
import { IoSend } from "react-icons/io5";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import DataLoadError from "../components/DataLoadError";

const BookDetails = () => {
  const { user } = use(AuthContext);
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/book-details/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Couldn't fetch book");
        return res.json();
      })
      .then((data) => {
        setData(data);
        setComments(
          data.comments?.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at),
          ),
        );
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []); // ← empty array ensures this runs only once on mount

  if (loading) return <Loading></Loading>;
  if (error) return <DataLoadError emoji='🫤'>{error}</DataLoadError>;
  const handleComment = (e) => {
    e.preventDefault();
    console.log(e.target.comment.value);
    const commentContent = e.target.comment.value;
    const userEmail = user?.email;
    const newComment = {
      email: userEmail,
      comment: commentContent,
      created_at: new Date().toISOString(),
    };

    console.log(comments);
    fetch(`http://localhost:3000/add-comment/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after saving comment", data);
        e.target.reset();
        setComments((prev) => [newComment, ...(prev || [])]);
      });
  };
  return (
    <div className='w-full  max-w-(--max-width) mx-auto flex flex-col p-(--padding)'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-fit mx-auto'>
        <Link
          to='/all-books'
          className='btn btn-neutral btn-ghost rounded-full justify-start  md:hidden'
        >
          <IoMdArrowRoundBack className='text-xl' />
          Back To All Books
        </Link>
        <div className='w-fit mt-20 mx-auto flex flex-col items-center justify-center'>
          <div className='book-container float-img'>
            <div className='book'>
              <img alt='Book Image' src={data.coverImage} />
            </div>
          </div>
          <img src={podiumImg} className='w-md' />
        </div>
        <div className='flex flex-col gap-5'>
          <Link
            to='/all-books'
            className='btn btn-neutral btn-ghost rounded-full justify-start hidden md:flex'
          >
            <IoMdArrowRoundBack className='text-xl' />
            Back To All Books
          </Link>

          <div className='md:ml-11 flex flex-col h-full'>
            <div>
              <h2 className='font-heading text-5xl md:text-6xl wrap-anywhere'>
                {data.title}
              </h2>
              <p className='text-lg mt-3'>
                by <span className='font-medium'>{data.author}</span>
              </p>
            </div>
            <div className='flex items-center mt-3 mb-2.5'>
              <Stars rating={data.rating}></Stars>
              <span className='bg-purple-100 text-purple-800 border border-purple-200 flex justify-center items-center font-semibold px-2.5 py-0.5 rounded-sm ms-3'>
                {data.rating}
              </span>
            </div>
            <div id='genres' className='flex flex-wrap gap-3 gap-y-0'>
              {data.genre?.map((single, index) => (
                <div
                  key={index}
                  className='mt-3 group relative w-fit rounded-full px-3 py-1 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]'
                >
                  <span
                    className={cn(
                      "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-linear-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-size-[300%_100%] p-0.5",
                    )}
                    style={{
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "destination-out",
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "subtract",
                      WebkitClipPath: "padding-box",
                    }}
                  ></span>
                  <AnimatedGradientText className='font-bold text-sm text-nowrap'>
                    {single}
                  </AnimatedGradientText>
                </div>
              ))}
            </div>
            <div className='flex-1 min-h-6'></div>
            <div className='flex flex-col border p-3.5 rounded-sm font-medium mt-10 md:mt-0 col-span-1'>
              <div>
                Added By{" "}
                <p className='font-semibold truncate'>{data.userEmail}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='md:col-span-2 flex flex-col-reverse md:flex-row gap-10'>
          <div className='flex-1 mt-14 md:mt-0'>
            <AuroraText className='font-heading text-5xl'>Comments</AuroraText>
            <div className='relative w-full mt-2 '>
              <hr className='border' />
              <ShineBorder
                shineColor={["#7928CA", "#daaa63", "#e29a3f", "#FE8BBB"]}
              />
            </div>
            <form className='mt-5 flex' onSubmit={handleComment}>
              <textarea
                rows={1}
                onInput={(e) => {
                  e.target.style.height = "auto";
                  e.target.style.height = e.target.scrollHeight + "px";
                }}
                className='resize-none overflow-hidden w-full p-2 border-2 border-primary rounded-sm min-h-11 bg-[#fff8eb]'
                placeholder='Type a comment...'
                name='comment'
              />
              <button type='submit' className='btn btn-accent btn-square ml-2'>
                <IoSend />
              </button>
            </form>
            {comments?.map((single, index) => (
              <div
                key={index}
                className='mt-3.5 bg-[#fff8eb] border-2 rounded-box border-primary p-2'
              >
                <h5 className='font-bold text-accent'>{single.email}</h5>
                <p className='text-justify wrap-normal text-sm'>
                  {single.comment}
                </p>
              </div>
            ))}
          </div>
          <div className='flex-1 mt-14 md:mt-0'>
            <AuroraText className='font-heading text-5xl'>Summary</AuroraText>
            <div className='relative w-full mt-2'>
              <hr className='border' />
              <ShineBorder
                shineColor={["#7928CA", "#daaa63", "#e29a3f", "#FE8BBB"]}
              />
            </div>
            <p className='text-justify wrap-normal mt-3.5'>{data.summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
