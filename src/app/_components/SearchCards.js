import Image from "next/image";
import StarIcon from "../_icons/StarIcon";

const SearchCards = ({ imageSource, title, rating, movId, releaseDate }) => {
  const getID = () => {
    window.location.href = `/individualMovie/${movId}`;
  };
  return (
    <div
      className="bg-white hover:bg-gray-200 cursor-pointer w-full h-fit flex flex-col overflow-hidden"
      onClick={getID}
    >
      <div className="flex">
        <div className="w-[100px] h-[150px]">
          <Image
          src={imageSource}
          alt={"poster"}
          width={2}
          height={3}
          layout="responsive"
          className="object-fill"
        />
        </div>
        
        <div className="pl-4 flex flex-col justify-center w-full">
          <p className="font-semibold line-clamp-1">{title}</p>
          <p className="flex items-center gap-1 pt-2.5">
            <StarIcon />
            {rating} /<span className="text-sm text-gray-500">10</span>
          </p>
          <p>{releaseDate}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchCards;
