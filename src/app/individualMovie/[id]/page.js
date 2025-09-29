"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Header from "../../_features/Header";
import Footer from "../../_features/Footer";
import Card from "@/app/_components/Cards";
import Image from "next/image";

const individual = () => {
  const [movie, setMovie] = useState([]);
  const [credits, setCredits] = useState([]);
  const [moreMovies, setMoreMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const apiLink = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US&page=1`;

  const creditLink = `https://api.themoviedb.org/3/movie/${params.id}/credits?language=en-US&page=1`;

  const moreLikeThisLink = `https://api.themoviedb.org/3/movie/${params.id}/similar?language=en-US&page=1`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
    },
  };
  const getCredits = async () => {
    const response = await fetch(creditLink, options);
    const jsonData = await response.json();
    setCredits(jsonData);
    console.log("this is credits", jsonData);
  };

  const getMore = async () => {
    const response = await fetch(moreLikeThisLink, options);
    const jsonData = await response.json();
    setMoreMovies(jsonData.results);
    console.log("this is more like this", jsonData);
  };

  const getData = async () => {
    setLoading(true);
    const response = await fetch(apiLink, options);
    const jsonData = await response.json();
    setMovie(jsonData);
    setLoading(false);
  };

  useEffect(() => {
    getData();
    getCredits();
    getMore();
  }, [params.id]);

  return (
    <>
      <Header />
      <p>{movie.original_title}</p>
      <p>{movie.release_date}</p>
      <p>{movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}</p>
      <p>{movie.vote_count ? movie.vote_count : "N/A"}</p>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="Movie Poster"
        height={400}
        width={200}
      />
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt="Movie Poster"
        height={400}
        width={600}
      />
      {credits?.crew?.map((member) =>
        member.job === "Director" ? <p key={member.id}>{member.name}</p> : null
      )}
      <hr />

      <p>More like this</p>
      <div className="grid grid-cols-5 grid-rows-2 gap-10 mb-8 p-10">
        {moreMovies.map((movie) => (
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
      
      <Footer />
    </>
  );
};

export default individual;
