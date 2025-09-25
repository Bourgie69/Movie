import Arrows from "../_components/Arrows";
import HeroCarousel from "../_components/HeroCarousel";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [loading, setLoading] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);

  const apiLink =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

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
    setNowPlaying(jsonData.results.slice(0, 4));
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(nowPlaying);
  return (
    <>
      <div className="bg-black h-[600px] flex items-center  relative">
        <div className="flex absolute justify-between px-2 w-full">
          {/* {loading ? (
            <p>Loading...</p>
          ) : (
            nowPlaying.map((movie) => (
              <HeroCarousel
                key={movie.id}
                imageSource={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                rating={movie.vote_average.toFixed(1)}
                desc={movie.overview}
              />
            ))
          )} */}
        </div>
        <Arrows currentIndex={heroIndex} />
      </div>
    </>
  );
};

export default HeroSection;
