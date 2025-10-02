"use client";


const Trailer = ({ trailer, watchTrailer, setWatchTrailer }) => {


  const closeTrailer = () => {
    setWatchTrailer((prev) => !prev);
  };

  return (
    <>
      <div>
        <iframe
          src={`https://www.youtube.com/embed/${trailer?.key}`}
          style={{
            display: watchTrailer ? "block" : "none",
          }}
          className="absolute top-25 left-50% w-[80%] h-[80%]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Movie Trailer"
        ></iframe>
        <button
          style={{
            display: watchTrailer ? "block" : "none",
          }}
          className="absolute top-10 border cursor-pointer rounded-full px-2.5 py-1 font-bold"
          onClick={closeTrailer}
        >
          X
        </button>
      </div>
    </>
  );
};

export default Trailer;
