"use client";
import Header from "@/app/_features/Header";
import Footer from "@/app/_features/Footer";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Card from "@/app/_components/Cards";
import LoadingCard from "@/app/_components/LoadingCard";
import ShortUniqueId from "short-unique-id";
import PageList from "@/app/_features/PageList";

const similarMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageSlider, setPageSlider] = useState(1);
  const params = useParams();
  const uid = ShortUniqueId();
  const apiLink = `https://api.themoviedb.org/3/movie/${params.id}/similar?language=en-US&page=${pageSlider}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
    },
  };

  const getMovies = async () => {
    setLoading(true);
    const res = await fetch(apiLink, options);
    const jsonData = await res.json();
    setMovies(jsonData.results);
    setLoading(false)
  };

  useEffect(() => {
    getMovies();
  }, [pageSlider]);

  movies.sort((a, b) => b.popularity - a.popularity);

  console.log(movies);

  return (
    <>
      <Header />
      <div className="grid grid-cols-5 grid-rows-2 gap-10 mb-8 p-10">
        {loading
          ? Array.from({ length: 20 }).map(() => (
              <LoadingCard key={uid.stamp(32)} />
            ))
          : movies.map((movie) => (
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

      <PageList page={pageSlider} setPage={setPageSlider} />
      <Footer />
    </>
  );
};

export default similarMovies;
