import React, { useEffect, useRef, useState } from "react";
import { BorderBeam } from "/src/components/ui/border-beam";
import { Toggle } from "@/components/ui/toggle";
import { Slider } from "@/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useLocation, useNavigate, useParams } from "react-router";
import SectionTitle from "../components/SectionTitle";
import DataLoadError from "../components/DataLoadError";
import Loading from "../components/Loading";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import axios from "axios";

const CreateAndUpdateBook = ({ updating }) => {
  const { id } = useParams();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [genre, setGenre] = useState([]);
  const [genreWarning, setGenreWarning] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [urlValid, setUrlValid] = useState(null);
  const [rating, setRating] = useState(0);
  const [freeze, setFreeze] = useState(false);

  const formRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    formRef.current?.reset();
  }, [location]);

  useEffect(() => {
    if (updating && user) {
      axiosSecure
        .get(`book-details/${id}`)
        .then((res) => {
          const data = res.data;
          setData(data);
          setText(data.coverImage);
          setGenre(data.genre);
          setRating(data.rating);
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }
  }, [user]);

  // image link loading

  async function isImage(url) {
    // console.log("loading start");
    setImageLoading(true);
    return new Promise((resolve) => {
      const img = new Image();

      const cleanup = (result) => {
        clearTimeout(timeout);
        img.onload = null;
        img.onerror = null;
        img.src = "";
        resolve(result);
      };

      const timeout = setTimeout(() => {
        toast.error("image url not found");
        cleanup(false);
      }, 2000);

      img.onload = () => cleanup(true);
      img.onerror = () => {
        toast.error("image url not found");
        cleanup(false);
      };

      img.src = url;
    });
  }
  useEffect(() => {
    if (!text || text === "https://") return;

    const timer = setTimeout(async () => {
      const result = await isImage(text);
      setImageLoading(false);
      // console.log("loading end");
      setUrlValid(result);
    }, 600);

    return () => {
      clearTimeout(timer);
      setUrlValid(null);
    };
  }, [text]);

  if (updating && loading) return <Loading />;
  if (updating && error)
    return <DataLoadError emoji='🫤'>{error}</DataLoadError>;

  // image link vs image file

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

  // genres

  const genreList = [
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

  const handleCreateBookForm = async (e) => {
    e.preventDefault();
    // e.stopPropagation();
    if (!genre.length) {
      setGenreWarning(true);
      window.addEventListener("click", () => setGenreWarning(false), {
        once: true,
      });

      // console.log(genre);
      return;
    }
    if (text) {
      // const result = await isImage(e.target.imageUrl.value);
      // console.log("loading end");
      // setImageLoading(false);
      if (!urlValid) {
        toast.error("image url not found");
        return;
      } else {
        setFreeze(true);
        const title = e.target.bookName.value;
        const rating = e.target.rating.value;
        const author = e.target.authorName.value;
        // console.log(genre);
        const summary = e.target.summary.value;
        const coverImage = e.target.imageUrl.value;
        const newBook = {
          title,
          author,
          genre,
          rating,
          summary,
          coverImage,
          userEmail: user?.email,
          created_at: new Date().toISOString(),
        };

        const promise = updating
          ? axiosSecure.patch(`/update-book/${id}`, newBook)
          : axiosSecure.post("/add-book", newBook);

        promise.then(() => {
          // console.log("after saving book", data);
          e.target.reset();
          navigate("/all-books");
          setFreeze(false);
        });
        toast.promise(promise, {
          loading: "Loading...",
          success: `${updating ? "Updated" : "Created"} book successfully!`,
          error: `Error ${updating ? "Updating" : "Creating"} book.`,
        });
      }
    } else {
      setFreeze(true);
      const title = e.target.bookName.value;
      const rating = e.target.rating.value;
      const author = e.target.authorName.value;
      const summary = e.target.summary.value;
      // console.log(genre);
      // console.log(file);

      const imgbbAPI = "4f580ae20bff203b1a9b2828e548fda5";
      const imgData = new FormData();
      imgData.append("image", file);
      axios
        .post(`https://api.imgbb.com/1/upload?key=${imgbbAPI}`, imgData)
        .then((res) => {
          // console.log(data);
          const newBook = {
            title,
            author,
            genre,
            rating,
            summary,
            coverImage: res.data.data.url,
            userEmail: user?.email,
            created_at: new Date().toISOString(),
          };

          const promise = updating
            ? axiosSecure.patch(`/update-book/${id}`, newBook)
            : axiosSecure.post("/add-book", newBook);

          promise.then(() => {
            // console.log("after saving book", data);
            e.target.reset();
            navigate("/all-books");
            setFreeze(false);
          });

          toast.promise(promise, {
            loading: "Loading...",
            success: `${updating ? "Updated" : "Created"} book successfully!`,
            error: `Error ${updating ? "Updating" : "Creating"} book.`,
          });
        });
    }
  };
  const handleReset = () => {
    setGenre(updating ? data.genre : []);
    setRating(updating ? data.rating : 0);
    setText(updating ? data.coverImage : "");
  };

  return (
    // <div className='w-full  max-w-(--max-width) mx-auto flex flex-col p-(--padding)'>
    <div className='relative h-fit overflow-hidden p-3 max-w-6xl mx-auto'>
      <SectionTitle>{updating ? "Update Book" : "Create Book"}</SectionTitle>
      <form
        className='flex flex-col xl:grid xl:grid-cols-2  gap-x-10 gap-y-2.5 mt-5'
        onSubmit={handleCreateBookForm}
        onReset={handleReset}
        ref={formRef}
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
            defaultValue={updating && data.title}
          />
        </div>
        <div className='flex items-center gap-7'>
          <label htmlFor='rating' className='font-semibold min-w-26'>
            Rating:
          </label>
          <div className='flex flex-1 gap-2.5'>
            <Slider
              value={[rating]}
              max={5}
              step={0.1}
              className='mx-auto w-full flex-1'
              name='rating'
              onValueChange={(val) => setRating(val[0])}
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
            id='authorName'
            name='authorName'
            type='text'
            placeholder='e.g.Leo Tolstoy'
            className='input border w-full'
            required
            defaultValue={updating && data.author}
          />
        </div>
        <div className='flex items-center gap-5'>
          <label htmlFor='creatorName' className='min-w-26 font-semibold'>
            Creator:
          </label>
          <input
            id='creatorName'
            type='text'
            value={user?.email}
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
              value={genre}
              onValueChange={setGenre}
              spacing={2}
              className='flex flex-wrap'
              variant='outline'
              size='default'
            >
              {genreList.map((name, key) => {
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
            name='summary'
            type='textarea'
            placeholder='Summary and Additional information about the book'
            className='input border w-full h-full min-h-52 whitespace-pre-wrap'
            required
            defaultValue={updating && data.summary}
          />
        </div>
        <div className='flex flex-col gap-2.5 mt-10 col-span-2 justify-center'>
          <label className='font-semibold'>Book Image:</label>
          <div className='flex flex-col xl:flex-row items-center xl:items-baseline w-full'>
            <input
              type='file'
              accept='image/*'
              onChange={handleFileChange}
              className='file-input file-input-md w-full border border-[#CDC4B9] h-fit flex-1 file-input-neutral'
              id='fileInput'
              required={!text && genre.length}
              name='fileInput'
            />
            <p className='mx-3.5 flex items-center h-9 text-sm'>OR</p>
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
                  // pattern='^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$'
                  title='Must be valid URL'
                  name='imageUrl'
                  value={text}
                  onChange={handleTextChange}
                  disabled={imageLoading}
                  required={!file && genre.length}
                />
              </label>
            </div>
          </div>
        </div>
        <button
          className='btn btn-neutral mt-10'
          type='submit'
          disabled={imageLoading || freeze}
        >
          Submit
        </button>
        <button
          className='btn mt-10'
          type='reset'
          disabled={imageLoading || freeze}
        >
          {updating ? "Reset" : "Clear"}
        </button>
      </form>
    </div>
    // </div>
  );
};

export default CreateAndUpdateBook;
