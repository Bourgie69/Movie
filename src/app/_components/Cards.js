import Image from "next/image";
import StarIcon from "../_icons/StarIcon";

const Card = ({ imageSource, title, rating, movId }) => {
  const getID = () => {
    window.location.href = `/individualMovie/${movId}`;
  };
  return (
    <div
      className="bg-white rounded shadow transition-transform duration-200 ease-in-out hover:scale-105 h-fit w-full cursor-pointer flex flex-col overflow-hidden"
      onClick={getID}
    >
      <Image
        src={imageSource}
        alt={"poster"}
        width={2}
        height={3}
        layout="responsive"
        objectFit="fill"
      />

      <p className="flex items-center gap-1 pl-4 pt-2.5">
        <StarIcon />
        {rating} / <span className="text-sm text-gray-500">10</span>
      </p>
      <p className="mt-2 font-semibold pl-4 line-clamp-1 pb-4 ">{title}</p>
    </div>
  );
};

export default Card;
