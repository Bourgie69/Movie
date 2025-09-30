"use client";
import Header from "@/app/_features/Header";
import Footer from "@/app/_features/Footer";
import Card from "@/app/_components/Cards";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

const genreMovies = () => {
  const params = useParams();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const genreLink = `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${params.id}&page=1`;

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
    const response = await fetch(genreLink, options);
    const jsonData = await response.json();
    setMovies(jsonData.results);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <div className="grid grid-cols-5 grid-rows-2 gap-10 p-10">
        {movies ? (
          movies.map((movie) => (
            <Card
              key={movie.id}
              movId={movie.id}
              alt={movie.title}
              title={movie.title}
              imageSource={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              rating={movie.vote_average.toFixed(1)}
            />
          ))
        ) : (
          <p>None Found</p>
        )}
      </div>

      <Footer />
    </>
  );
};

export default genreMovies;
