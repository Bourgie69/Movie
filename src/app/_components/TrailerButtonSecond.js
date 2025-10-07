"use client";
import TrailerSecond from "../_features/TrailerSecond";
import PlayIcon from "../_icons/PlayIcon";
import { useState } from "react";

const TrailerButtonSecond = ({ trailer }) => {
  const [showTrailer, setShowTrailer] = useState(false);

  const handleTrailer = () => {
    setShowTrailer((prev) => !prev);
  };

  return (
    <>
    <div className="relative bottom-12 left-2">
       <button
        className="flex items-center gap-2 bg-white text-black px-3 py-3 rounded-full hover:bg-gray-200 transition"
        onClick={handleTrailer}
      >
        <PlayIcon />
      </button> 
    </div>
      

      <TrailerSecond
        trailer={trailer}
        watchTrailer={showTrailer}
        setWatchTrailer={setShowTrailer}
      />
    </>
  );
};

export default TrailerButtonSecond;
