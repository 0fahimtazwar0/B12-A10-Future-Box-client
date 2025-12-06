import React from "react";
import SectionTitle from "../../components/SectionTitle";
// import "./AboutBookHaven.css";

const AboutBookHaven = () => {
  const ImgHover = ({ link, className }) => {
    return (
      <div className='hover-3d'>
        <figure>
          <img className={className} src={link} />
        </figure>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  };
  return (
    <div className='flex flex-col gap-15'>
      <SectionTitle>About Book Haven</SectionTitle>
      <div className=' relative z-0 h-fit  grid grid-cols-1 xl:grid-cols-2 gap-10'>
        <div className='flex items-center w-fit gap-3 sm:gap-10 mx-auto'>
          <div>
            {ImgHover({
              link: "https://img.freepik.com/premium-photo/mystic-still-life-with-magic-book-steam-from-book-burning-light-bulb-hanging-air-text-book-is-readable_128937-1071.jpg",
              className: "h-80 sm:h-96 rounded-lg object-cover",
            })}
          </div>
          <div className='flex flex-col gap-3 sm:gap-10'>
            {ImgHover({
              link: "https://img.freepik.com/free-photo/smiley-woman-reading-book-outdoors_23-2148396297.jpg",
              className:
                "size-44 sm:size-60 aspect-square object-cover rounded-lg",
            })}
            {ImgHover({
              link: "https://img.freepik.com/premium-photo/many-old-books-bookshelf-library_129479-5503.jpg",
              className:
                "size-44 sm:size-60 aspect-square object-cover rounded-lg",
            })}
          </div>
        </div>
        <div className='flex items-center text-justify h-full'>
          <p>
            <h1 className='text-4xl font-heading font-medium inline'>
              Book Haven{" "}
            </h1>
            is a space built by readers, for readers. We believe books are more
            than just collections of words—they spark imagination, inspire
            change, and offer a place of comfort. Our mission is to bring
            readers closer to stories that matter, across every genre and mood.
            We curate our selection with care, focusing on titles that
            captivate, educate, and entertain. Whether someone enjoys epic
            fantasies, contemporary fiction, classics, or hidden literary gems,
            Book Haven strives to make their reading journey meaningful. Beyond
            being a bookstore, Book Haven is a growing community of people who
            love to read, share, and explore ideas. Every story has a home here,
            and every reader can find something they connect with. Book Haven —
            where stories live and readers belong.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBookHaven;
