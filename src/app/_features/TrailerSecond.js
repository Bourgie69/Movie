"use client";


const TrailerSecond = ({ trailer, watchTrailer, setWatchTrailer }) => {


  const closeTrailer = () => {
    setWatchTrailer((prev) => !prev);
  };

  return (
    <>
      <div className="">
        <iframe
          src={ watchTrailer? `https://www.youtube.com/embed/${trailer?.key}`: null}
          style={{
            display: watchTrailer ? "block" : "none",
          }}
          className="absolute top-35 left-[10vw] w-[80vw] h-[45vw]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Movie Trailer"
        ></iframe>
        <button
          style={{
            display: watchTrailer ? "block" : "none",
          }}
          className="absolute top-25 right-[12vw] bg-black text-white border cursor-pointer rounded-full px-2.5 py-1 font-bold"
          onClick={closeTrailer}
        >
          X
        </button>
      </div>
    </>
  );
};

export default TrailerSecond;
