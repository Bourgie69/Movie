import Image from "next/image";
import StarIcon from "../_icons/StarIcon";

const Card = ({imageSource, title, rating}) => {
  return (
    <div className="bg-white rounded w-fit text-ellipsis shadow transition-transform duration-200 ease-in-out hover:scale-105">
        <Image 
        src={imageSource}
        alt={title}
        width={300}
        height={1000}
        />
        <p className="flex items-center gap-1 pl-4 pt-2.5">
          <StarIcon/>
          {rating}
        </p>
        
      <p className="mt-2 font-semibold pl-4">{title}</p>
    </div>
  );
};

export default Card;
