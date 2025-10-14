"use client";
import Header from "@/app/_features/Header";
import Footer from "@/app/_features/Footer";
import Card from "@/app/_components/Cards";
import LoadingCard from "@/app/_components/LoadingCard";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import PageList from "@/app/_features/PageList";
import ShortUniqueId from "short-unique-id";

const genreMovies = () => {
  const params = useParams();
  const uid = ShortUniqueId();

  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [genreLoading, setGenreLoading] = useState(false);

  const genreLink = `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${params.id}&page=${page}`;

  const apiLink = `https://api.themoviedb.org/3/genre/movie/list?language=en`;

  const getGenres = async () => {
    setGenreLoading(true);
    const response = await fetch(apiLink, options);
    const jsonData = await response.json();
    setGenre(jsonData.genres);
    setGenreLoading(false);
  };

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
  }, [page]);

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <>
      <Header />

      <div className="pl-4 pt-4 flex items-center gap-2">
        <p className="text-lg pl-4">Showing Movies For :</p>
        <span className="text-lg font-semibold">
          {genre?.find((g) => g.id === Number(params.id))?.name || "Not found"}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 grid-rows-2 gap-10 p-10">
        {loading ? (
          Array.from({ length: 20 }).map(() => (
            <LoadingCard key={uid.stamp(32)} />
          ))
        ) : movies ? (
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
      <PageList page={page} setPage={setPage} />

      <Footer />
    </>
  );
};

export default genreMovies;
