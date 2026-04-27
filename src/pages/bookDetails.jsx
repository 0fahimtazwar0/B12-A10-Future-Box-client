import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { AnimatedGradientText } from "/src/components/ui/animated-gradient-text";
import { ShineBorder } from "/src/components/ui/shine-border";
import { AuroraText } from "/src/components/ui/aurora-text";
import { cn } from "@/lib/utils";
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import Stars from "../components/Stars";
import SectionTitle from "../components/SectionTitle";
import podiumImg from "/src/assets/podium.png";
import { useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/book-details/${id}`)
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
    <div className='flex flex-col gap-10 w-fit max-w-[1440px] mt-24 mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-fit mx-auto'>
        <button className='btn btn-neutral btn-ghost rounded-full justify-start  md:hidden'>
          <IoMdArrowRoundBack className='text-xl' />
          Back To All Books
        </button>
        <div className='w-fit mt-20 mx-auto flex flex-col items-center justify-center'>
          <div className='book-container float-img'>
            <div className='book'>
              <img alt='Book Image' src={data.coverImage} />
            </div>
          </div>
          <img src={podiumImg} className='w-md' />
        </div>
        <div className='flex flex-col gap-5'>
          <button className='btn btn-neutral btn-ghost rounded-full justify-start hidden md:flex'>
            <IoMdArrowRoundBack className='text-xl' />
            Back To All Books
          </button>

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
                      "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-linear-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-size-[300%_100%] p-[2px]",
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
              <p>
                Added By{" "}
                <p className='font-semibold truncate'>{data.userEmail}</p>
              </p>
            </div>
          </div>
        </div>
        <div className='col-span-1 md:col-span-2 mt-14 md:mt-0'>
          <AuroraText className='font-heading text-5xl'>Summary</AuroraText>
          <div className='relative w-full'>
            <hr className='mt-2 border' />
            <ShineBorder
              shineColor={["#7928CA", "#daaa63", "#e29a3f", "#FE8BBB"]}
            />
          </div>
          <p className='text-justify wrap-normal mt-3.5'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            ipsa iusto nisi veniam saepe tempore inventore eum, tenetur eaque
            dicta dignissimos explicabo vero dolore voluptatibus, dolorum culpa
            est neque natus itaque quo? Vel molestiae ea exercitationem nostrum
            ad, saepe beatae tempora id. Quas, facere deserunt quis est rerum
            nesciunt incidunt sunt molestias reprehenderit, debitis et labore
            illum neque maxime eaque amet architecto nostrum aperiam quidem
            voluptates, nulla dolorum vitae ex. Velit alias dolore dolores
            aspernatur aliquid quasi, veritatis culpa! Ullam maxime quisquam
            odit a magni eos accusantium corrupti vitae dolor blanditiis?
            Dolorum quia modi libero repudiandae adipisci fuga, amet eum
            eligendi, et eos culpa a hic. Deserunt, reprehenderit incidunt
            alias, soluta ratione perspiciatis fuga voluptatibus suscipit animi
            debitis sed maxime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
