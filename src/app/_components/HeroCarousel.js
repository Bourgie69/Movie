import PlayIcon from "../_icons/PlayIcon";
import Image from "next/image";
import StarIcon from "../_icons/StarIcon";
import TrailerButton from "./TrailerButton";

const HeroCarousel = ({ title, rating, desc, imageSource, trailer }) => {
  return (
    <div className=" w-full h-[900] text-white">
      <Image
        src={imageSource}
        alt="Movie Poster"
        layout="fill"
        objectFit="cover"
      />

      <div className=" absolute inset-0 bg-gradient-to-r from-black/60 to-black/0" />

      <div className="relative  h-full flex items-center pl-20">
        <div className="max-w-xl space-y-5">
          <div>
            <p className="text-lg text-gray-300">Now Playing:</p>
            <h2 className="font-bold text-3xl">{title}</h2>
            <div className="flex items-center gap-2 mt-2">
              <StarIcon />
              <p className="font-semibold">{rating}</p>
            </div>
          </div>

          <p className="text-sm text-gray-200">{desc}</p>

          <TrailerButton trailer={trailer} />
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
