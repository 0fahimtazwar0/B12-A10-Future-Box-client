import React, { useEffect, useState } from "react";
import { BorderBeam } from "/src/components/ui/border-beam";
import { Toggle } from "@/components/ui/toggle";
import { Slider } from "@/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const CreateBooks = () => {
  // image link vs image file
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
    setFile(null); // clear file

    // also reset file input element
    document.getElementById("fileInput").value = "";
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile || null);

    if (selectedFile) {
      setText("");
    }
  };
  // image link loading

  const [imageLoading, setImageLoading] = useState(false);

  async function isImage(url) {
    console.log("loading start");
    setImageLoading(true);
    try {
      const res = await fetch(url, {
        method: "HEAD",
        signal: AbortSignal.timeout(3000),
      });
      const type = res.headers.get("content-type") || "";
      return res.ok && type.startsWith("image/");
    } catch {
      alert("image url not found ❌");

      return false;
    }
  }

  const [urlValid, setUrlValid] = useState(null);

  useEffect(() => {
    if (!text || text === "https://") return;

    const timer = setTimeout(async () => {
      const result = await isImage(text);
      setImageLoading(false);
      console.log("loading end");
      setUrlValid(result);
    }, 600);

    return () => {
      clearTimeout(timer);
      setUrlValid(null);
    };
  }, [text]);
  // genres
  const [genreValues, setGenreValues] = useState([]);
  const [genreWarning, setGenreWarning] = useState(false);

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

  const [rating, setRating] = useState(0);

  const handleCreateBookForm = async (e) => {
    e.preventDefault();
    // e.stopPropagation();
    if (!genreValues.length) {
      setGenreWarning(true);
      window.addEventListener("click", () => setGenreWarning(false), {
        once: true,
      });

      console.log(genreValues);
      return;
    }
    if (text) {
      // const result = await isImage(e.target.imageUrl.value);
      // console.log("loading end");
      // setImageLoading(false);
      if (!urlValid) {
        alert("image url not found ❌");
        return;
      } else {
        console.log(e.target.bookName.value);
        console.log(e.target.rating.value);
        console.log(e.target.authorName.value);
        console.log(genreValues);
        console.log(e.target.imageUrl.value);
      }
    } else {
      console.log(e.target.bookName.value);
      console.log(e.target.rating.value);
      console.log(e.target.authorName.value);
      console.log(genreValues);
      console.log(file);
    }
  };

  const handleReset = () => {
    setGenreValues([]);
    setRating(0);
  };

  return (
    <div className='w-full  max-w-(--max-width) mx-auto flex flex-col p-(--padding) sm:mt-16'>
      <div className='relative h-fit overflow-hidden p-3 max-w-6xl mx-auto'>
        <form
          className='flex flex-col xl:grid xl:grid-cols-2  gap-x-10 gap-y-2.5'
          onSubmit={handleCreateBookForm}
          onReset={handleReset}
        >
          <div className='flex items-center gap-5 '>
            <label htmlFor='bookName' className='font-semibold  min-w-26'>
              Book Name:
            </label>
            <input
              id='bookName'
              type='text'
              placeholder='e.g.War and Peace'
              className='input border w-full'
              name='bookName'
              required
            />
          </div>
          <div className='flex items-center gap-7'>
            <label htmlFor='rating' className='font-semibold min-w-26'>
              Rating:
            </label>
            <div className='flex flex-1 gap-2.5'>
              <Slider
                defaultValue={[0]}
                max={5}
                step={0.1}
                className='mx-auto w-full flex-1'
                name='rating'
                onChange={(e) => setRating(e.target.value)}
              />{" "}
              <p className='flex bg-neutral text-white font-medium px-1 rounded-sm text-sm justify-center items-center w-8'>
                {rating}
              </p>
            </div>
          </div>
          <div className='flex items-center gap-5'>
            <label htmlFor='authorName' className='min-w-26 font-semibold'>
              Author:
            </label>
            <input
              name='authorName'
              type='text'
              placeholder='e.g.Leo Tolstoy'
              className='input border w-full'
              required
            />
          </div>
          <div className='flex items-center gap-5'>
            <label htmlFor='creatorName' className='min-w-26 font-semibold'>
              Creator:
            </label>
            <input
              id='creatorName'
              type='text'
              value='0fahimtazwar0'
              className='input border w-full'
              readOnly
            />
          </div>
          <div className='flex flex-col gap-2.5 mt-6 col-span-2'>
            <label htmlFor='genre' className='font-semibold'>
              Genres:
            </label>
            <div className='flex flex-wrap items-center gap-2 relative'>
              <div
                className={` border-black border-2 w-[101%] h-[105%] xl:h-[120%] absolute right-[-0.5%] rounded-md tooltip tooltip-bottom tooltip-open pointer-events-none ${genreWarning || "hidden"}`}
              >
                <div className='tooltip-content bg-white border border-black shadow-[0_2px_4px_rgba(0,0,0,0.08),0_8px_16px_rgba(0,0,0,0.12)]'>
                  <div className='text-[13px] text-black open-sans h-8 flex justify-center items-center'>
                    <img
                      src='https://caneat.jp/assets/warning_icon-78f1c5d966737518b5db55dff791aa64c4d256aeffb0b708a626d582b4edadb2.png'
                      alt=''
                      className='w-7 mr-2'
                    />
                    Please choose one of the options.
                  </div>
                </div>
              </div>
              <ToggleGroup
                type='multiple'
                value={genreValues}
                onValueChange={setGenreValues}
                spacing={2}
                className='flex flex-wrap'
                variant='outline'
                size='default'
              >
                {genres.map((name, key) => {
                  return (
                    <ToggleGroupItem value={name} key={key}>
                      {name}
                    </ToggleGroupItem>
                  );
                })}
              </ToggleGroup>
            </div>{" "}
          </div>
          <div className='flex flex-col gap-2.5 mt-6 col-span-2'>
            <label htmlFor='summary' className='font-semibold'>
              Summary:
            </label>
            <textarea
              id='summary'
              type='textarea'
              placeholder='Additional information about the book'
              className='input border w-full h-full min-h-28'
            />
          </div>
          <div className='flex flex-col gap-2.5 mt-10 col-span-2 justify-center'>
            <label className='font-semibold'>Book Image:</label>
            <div className='flex flex-col xl:flex-row items-center xl:items-baseline'>
              <div className='flex-1'>
                <input
                  type='file'
                  accept='image/*'
                  onChange={handleFileChange}
                  className='file-input file-input-md w-full border border-[#CDC4B9] h-fit flex-1 file-input-neutral'
                  id='fileInput'
                  required={!text && genreValues.length}
                  name='fileInput'
                />
              </div>
              <p className='mx-3.5 flex items-center h-9'>OR</p>
              <div className='flex-1 h-fit w-full'>
                <label
                  className={`input border w-full h-9 ${imageLoading && "highlight-2nd"}`}
                >
                  {imageLoading ? (
                    <span className='loading loading-spinner loading-xs'></span>
                  ) : (
                    <svg
                      className='h-[1em] opacity-50'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                    >
                      <g
                        strokeLinejoin='round'
                        strokeLinecap='round'
                        strokeWidth='2.5'
                        fill='none'
                        stroke='currentColor'
                      >
                        <path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71'></path>
                        <path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'></path>
                      </g>
                    </svg>
                  )}
                  <input
                    type='url'
                    // required
                    placeholder='https://'
                    defaultValue='https://'
                    // pattern='^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$'
                    title='Must be valid URL'
                    name='imageUrl'
                    value={text}
                    onChange={handleTextChange}
                    disabled={imageLoading}
                    required={!file && genreValues.length}
                  />
                </label>
              </div>
            </div>
          </div>
          <button
            className='btn btn-neutral mt-10'
            type='submit'
            disabled={imageLoading}
          >
            Submit
          </button>
          <button className='btn mt-10' type='reset' disabled={imageLoading}>
            Clear
          </button>
        </form>

        {/* <BorderBeam
          duration={12}
          size={200}
          borderWidth={3}
          className='from-base-100 via-neutral to-base-100'
        />
        <BorderBeam
          duration={12}
          size={200}
          borderWidth={3}
          delay={6}
          className='from-base-100 via-neutral to-base-100'
        /> */}
      </div>
    </div>
  );
};

export default CreateBooks;
