import PlayIcon from "../_icons/PlayIcon";
import Image from "next/image";
import StarIcon from "../_icons/StarIcon";

const HeroCarousel = (props) => {
  const { movieTitle, rating, desc, imageSource } = props;

  return (
    <>
      <div className="w-full text-white">
        <div className="flex flex-col gap-5">
          <Image
          src={imageSource}
          alt="Movie Poster"
          height={900}
          width={1600}
          />


          <div className="pt-20 absolute">
            <p className="text-lg">Now Playing:</p>
            <p className="font-bold text-3xl">{movieTitle}</p>
            <div className="flex items-center gap-2.5">
              <StarIcon/>
              <p>{rating}</p>
            </div>
            
          </div>

          <div className="pl-30 flex flex-col gap-2.5 absolute">
            <p className="w-[500px]">{desc}</p>
            <button className="flex gap-2.5 items-center bg-white rounded-sm p-2.5 w-fit">
              <PlayIcon/>
              <p className="text-black">Wach Trailer</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCarousel;
