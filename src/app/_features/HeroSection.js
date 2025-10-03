import Arrows from "../_components/Arrows";
import HeroCarousel from "../_components/HeroCarousel";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [loading, setLoading] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);

  const apiLink =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

  const [trailer, setTrailer] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
    },
  };

  const getData = async () => {
    setLoading(true);
    const response = await fetch(apiLink, options);
    const jsonData = await response.json();
    setNowPlaying(jsonData.results.slice(0, 5));
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);


  const currentMovie = nowPlaying[heroIndex];

  const getTrailer = async () => { 
    
    const trailerLink = `https://api.themoviedb.org/3/movie/${currentMovie?.id}/videos?language=en-US`;

    const response = await fetch(trailerLink, options);
    const jsonData = await response.json();
    setTrailer(jsonData.results);
  };

  useEffect(() => {
    if(!currentMovie?.id) return;
    getTrailer()
  }, [currentMovie])


  return (
    <>
      <div className="bg-black h-[720px] flex items-center  relative">
        <div className="flex absolute justify-between px-2 w-full">
          {loading ? (
            <p>Loading...</p>
          ) : currentMovie ? (
            <HeroCarousel
              title={currentMovie.title}
              rating={currentMovie.vote_average.toFixed(1)}
              desc={currentMovie.overview}
              imageSource={`https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`}
              trailer={trailer? trailer[0]: null}
            />
          ) : (
            <p>No movies found.</p>
          )}
        </div>
        <Arrows setCurrentIndex={setHeroIndex} total={nowPlaying.length} />
      </div>
    </>
  );
};

export default HeroSection;
