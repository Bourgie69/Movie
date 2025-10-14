"use client";

import Link from "next/link";
import Card from "../_components/Cards";
import { useState, useEffect } from "react";
import LoadingCard from "../_components/LoadingCard";
import ShortUniqueId from 'short-unique-id';

const MovieList = ({
  headerTag,
  seeMoreDisplay,
  category,
  routePage,
  pageNumber,
}) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const uid = new ShortUniqueId();


  const apiLink = `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${pageNumber}`;

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
    setMovies(jsonData.results);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [category, pageNumber]);

  return (
    <div className="px-10">
      <div className="flex justify-between items-center">
        <p className="font-bold text-lg py-10">{headerTag}</p>
        {seeMoreDisplay && (
          <Link href={routePage}>
            <button>See More &#8594;</button>
          </Link>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 mb-8">
        {loading
          ? Array.from({ length: 10 }).map(() => <LoadingCard key={uid.stamp(32)} />)
          : movies
              .slice(0, 10)
              .map((movie) => (
                <Card
                  key={movie.id}
                  movId={movie.id}
                  alt={movie.title}
                  title={movie.title}
                  imageSource={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  rating={movie.vote_average.toFixed(1)}
                />
              ))}
      </div>
    </div>
  );
};

export default MovieList;
