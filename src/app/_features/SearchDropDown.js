"use client";
import { useState, useEffect } from "react";
import SearchCards from "../_components/SearchCards";

const SearchDropDown = ({ searchParam }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiLink = `https://api.themoviedb.org/3/search/movie?query=${searchParam}&language=en-US&page=1`;

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
    setSearchResults(jsonData.results);
    console.log(jsonData)
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [searchParam]);

  searchResults.sort((a, b) => b.popularity - a.popularity);

  return (
    <>
      <div
        className="bg-amber-100 absolute z-1 w-[600px] h-fit left-80 flex flex-col"
        style={{ display: searchParam ? "flex" : "block" }}
      >
        {searchResults.slice(0, 5).map((movie) => (
          <SearchCards
            key={movie.id}
            imageSource={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            title={movie.title}
            rating={movie.vote_average.toFixed(1)}
            movId={movie.id}
            releaseDate={movie.release_date.split('-')[0]}
          />
        ))}
      </div>
    </>
  );
};

export default SearchDropDown;
