"use client";

import Link from "next/link";
import Card from "../_components/Cards";
import { useState, useEffect } from "react";

const MovieList = (props) => {
  const { headerTag, seeMoreDisplay } = props;

  const [movies, setMovies] = useState({});
  const [loading, setLoading] = useState(false);

  const apiLink =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

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
    const data = await fetch(apiLink, options);
    const jsonData = await data.json();
    setMovies(jsonData.results);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

    console.log(movies.type)

  return (
    <>
      <div className="px-10">
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg py-10">{headerTag}</p>
          <Link
            href="/movies"
            style={{ display: seeMoreDisplay ? "block" : "none" }}
          >
            <button>See More &#8594;</button>
          </Link>
        </div>

        <div className="grid grid-cols-4 grid-rows-2 gap-10 mb-8">
            {movies.type !== undefined ? movies.map((movie, index) => {
                return <Card
                key={index}
                alt={movie.title}
                imageSource={movie.poster_path}/>
            }): console.log('error')}
        </div>
      </div>
    </>
  );
};

export default MovieList;
