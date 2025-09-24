const HeroCarousel = (props) => {
  const { movieTitle, rating, desc } = props;

  return (
    <>
      <div className="bg-gray-300 w-full h-[400px]">
        <div className="flex flex-col gap-5">

          <div className="pl-30 pt-20">
            <p className="text-lg">Now Playing:</p>
            <p className="font-bold text-3xl">{movieTitle}</p>
            <p>{rating}</p>
          </div>

          <div className="pl-30 flex flex-col gap-2.5 ">
            <p className="w-[500px]">{desc}</p>
            <button className="flex gap-2.5 items-center bg-white rounded-sm p-2.5 w-fit">
              <svg
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.3335 1L10.6668 7L1.3335 13V1Z"
                  stroke="#18181B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Wach Trailer</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCarousel;
