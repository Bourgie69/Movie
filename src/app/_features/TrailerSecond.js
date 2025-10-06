"use client";


const TrailerSecond = ({ trailer, watchTrailer, setWatchTrailer }) => {


  const closeTrailer = () => {
    setWatchTrailer((prev) => !prev);
  };

  return (
    <>
      <div>
        <iframe
          src={ watchTrailer? `https://www.youtube.com/embed/${trailer?.key}`: null}
          style={{
            display: watchTrailer ? "block" : "none",
          }}
          className="absolute top-45 left-10% w-[60%] h-[35%]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Movie Trailer"
        ></iframe>
        <button
          style={{
            display: watchTrailer ? "block" : "none",
          }}
          className="absolute top-30 border cursor-pointer rounded-full px-2.5 py-1 font-bold"
          onClick={closeTrailer}
        >
          X
        </button>
      </div>
    </>
  );
};

export default TrailerSecond;
