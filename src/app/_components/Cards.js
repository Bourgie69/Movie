import Image from "next/image";

const Card = ({imageSource, title}) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="bg-white rounded shadow p-4">
        <Image 
        src={imageSource}
        alt={title}
        width={200}
        height={400}
        />
      <h2 className="text-lg mt-2 font-semibold">{title}</h2>
    </div>
  );
};

export default Card;
