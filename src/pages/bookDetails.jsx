import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { AnimatedGradientText } from "/src/components/ui/animated-gradient-text";
import { ShineBorder } from "/src/components/ui/shine-border";
import { AuroraText } from "/src/components/ui/aurora-text";
import { cn } from "@/lib/utils";
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import Stars from "../components/Stars";
import SectionTitle from "../components/SectionTitle";
import podiumImg from "/src/assets/podium.png";

const bookDetails = () => {
  const rating = 4.7;
  return (
    <div className='flex flex-col gap-10 w-fit max-w-[1440px] mt-24 mx-auto'>
      <div className='grid grid-cols-2 gap-10 w-fit mx-auto'>
        <div className='w-fit mt-20 mx-auto'>
          <div className='book-container float-img'>
            <div className='book'>
              <img
                alt='Book Image'
                src='https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg/250px-A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg'
              />
            </div>
          </div>
          <img src={podiumImg} className='w-md' />
        </div>
        <div className='flex flex-col gap-5'>
          <button className='btn btn-neutral btn-ghost rounded-full justify-start '>
            <IoMdArrowRoundBack className='text-xl' />
            Back To All Books
          </button>

          <div className='ml-11 flex flex-col h-full'>
            <div>
              <h2 className='font-heading text-6xl'>fire and water</h2>
              <p className='text-lg mt-1'>
                by <span className='font-medium'>Ryan Gosling</span>
              </p>
            </div>
            <div className='flex items-center mt-3 mb-2.5'>
              <Stars rating={rating}></Stars>
              <span className='bg-purple-100 text-purple-800 border border-purple-200 flex justify-center items-center font-semibold px-2.5 py-0.5 rounded-sm ms-3'>
                {rating}
              </span>
            </div>
            <div className='mt-3 group relative w-fit rounded-full px-3 py-1 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]'>
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
              <AnimatedGradientText className='font-bold text-sm'>
                genre
              </AnimatedGradientText>
            </div>
            <div className='flex-1'></div>
            <div className='border p-3.5 rounded-sm font-medium w-fit'>
              <p className='wrap-anywhere'>
                Added By{" "}
                <bold className='font-semibold'>
                  0fahimtazwar0@gmaieredel.com
                </bold>
              </p>
            </div>
          </div>
        </div>
        <div className='col-span-2'>
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

export default bookDetails;
