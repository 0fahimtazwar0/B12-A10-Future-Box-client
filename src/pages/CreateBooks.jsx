import React from "react";
import { BorderBeam } from "/src/components/ui/border-beam";
import { Toggle } from "@/components/ui/toggle";

const CreateBooks = () => {
  return (
    <div className='w-full  max-w-(--max-width) mx-auto flex flex-col p-(--padding) mt-16'>
      <div className='relative w-[350px] h-fit overflow-hidden p-3 '>
        <label htmlFor='bookName'>Name of the Book</label>
        <input
          id='bookName'
          type='text'
          placeholder='e.g.War and Peace'
          className='input border'
        />
        <label htmlFor='authorName'>Name of the Author</label>
        <input
          id='authorName'
          type='text'
          placeholder='e.g.Leo Tolstoy'
          className='input border'
        />
        <label htmlFor='creatorName'>Name of the Creator</label>
        <input
          id='creatorName'
          type='text'
          value='0fahimtazwar0'
          className='input border'
        />
        <label htmlFor='genre'>Genres</label>
        <Toggles />
        <label htmlFor='description'>Description</label>
        <textarea
          id='description'
          type='textarea'
          placeholder='Additional information about the book'
          className='input border'
        />
        <BorderBeam
          duration={6}
          size={200}
          borderWidth={3}
          className='from-indigo-500 via-[30%] via-purple-500 via-[60%] via-white to-yellow-500'
        />
        <BorderBeam duration={6} size={200} borderWidth={3} delay={3} />
      </div>
    </div>
  );
};

const Toggles = () => {
  const genres = [
    "Fantasy",
    "Science Fiction",
    "Romance",
    "Mystery",
    "Thriller",
    "Horror",
    "Historical Fiction",
    "Adventure",
    "Young Adult",
    "Biography",
    "Autobiography",
    "Self-Help",
    "History",
    "Science",
    "Travel",
    "True Crime",
    "Graphic Novels",
    "Comics",
    "Poetry",
    "Children’s",
    "Cookbooks",
  ];
  return (
    <div className='flex flex-wrap items-center gap-2'>
      {genres.map((name, key) => {
        return (
          <Toggle
            key={key}
            variant='outline'
            aria-label='Toggle default'
            size='default'
          >
            {name}
          </Toggle>
        );
      })}
    </div>
  );
};

export default CreateBooks;
