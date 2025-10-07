import Image from "next/image";
import StarIcon from "../_icons/StarIcon";

const SearchCards = ({ imageSource, title, rating, movId, releaseDate }) => {
  const getID = () => {
    window.location.href = `/individualMovie/${movId}`;
  };
  return (
    <div
      className="bg-white shadow transition-transform duration-200 ease-in-out hover:scale-105 cursor-pointer w-full h-fit flex flex-col overflow-hidden"
      onClick={getID}
    >
      <div className="flex">
        <Image
          src={imageSource}
          alt={"poster"}
          width={100}
          height={200}
        />
        <div>
          <p className="mt-2 font-semibold pl-4 line-clamp-2">{title}</p>
          <p className="flex items-center gap-1 pl-4 pt-2.5">
            <StarIcon />
            {rating}/<span className="text-sm text-gray-500">10</span>
          </p>
          <p className="pl-4">{releaseDate}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchCards;
