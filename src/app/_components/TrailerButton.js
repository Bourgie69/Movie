"use client"
import Trailer from "../_features/Trailer";
import PlayIcon from "../_icons/PlayIcon";
import { useState } from "react";

const TrailerButton = ({trailer}) => {

    const [showTrailer, setShowTrailer] = useState(false)

    const handleTrailer = () => {
        setShowTrailer(prev => !prev)
    }

  return (
    <>
      <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
      onClick={handleTrailer}>
        <PlayIcon />
        <span>Watch Trailer</span>
      </button>

      <Trailer trailer={trailer}
      watchTrailer={showTrailer}
      setWatchTrailer={setShowTrailer}/>
    </>
  );
};

export default TrailerButton