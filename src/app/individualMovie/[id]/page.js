"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Header from "../../_features/Header";
import Footer from "../../_features/Footer";
import Card from "@/app/_components/Cards";
import Image from "next/image";
import StarIcon from "@/app/_icons/StarIcon";
import Link from "next/link";
import TrailerButton from "@/app/_components/TrailerButton";

const individual = () => {
  const [movie, setMovie] = useState([]);
  const [credits, setCredits] = useState([]);
  const [moreMovies, setMoreMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [trailer, setTrailer] = useState([]);
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
  };

  const getMore = async () => {
    const response = await fetch(moreLikeThisLink, options);
    const jsonData = await response.json();
    setMoreMovies(jsonData.results);
  };

  const getData = async () => {
    setLoading(true);
    const response = await fetch(apiLink, options);
    const jsonData = await response.json();
    setMovie(jsonData);
    setLoading(false);
  };
  const getTrailer = async () => {
    const trailerLink = `https://api.themoviedb.org/3/movie/${params?.id}/videos?language=en-US`;

    const response = await fetch(trailerLink, options);
    const jsonData = await response.json();
    setTrailer(jsonData.results);
  };

  useEffect(() => {
    if (params?.id) return;
    getTrailer();
  }, []);
  useEffect(() => {
    getData();
    getCredits();
    getMore();
  }, [params.id]);

  console.log(credits);

  return (
    <>
      <Header />

      <div className="px-10 pt-10">
        <div className="flex justify-between">
          <div>
            <p className="text-2xl font-bold">{movie.original_title}</p>
            <p>{movie.release_date}</p>
          </div>
          <div>
            <p>Rating</p>
            <div className="flex items-center gap-2">
              <StarIcon />
              <p>
                {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
              </p>
            </div>

            <p>{movie.vote_count ? movie.vote_count : "N/A"}</p>
          </div>
        </div>
        <div className="flex gap-2.5">
          <div>
            <Image
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="Movie Poster"
              height={400}
              width={275}
            />
          </div>
          <div>
            <Image
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt="Movie Poster"
              height={400}
              width={750}
            />
            <div className="relative bottom-12 left-2.5">
              <TrailerButton trailer={trailer} />
            </div>
          </div>
        </div>{" "}
        <div className="py-2.5">
          {(movie?.genres || []).map((genre, idx) => (
            <span
              key={genre.id || idx}
              className="mr-2 border rounded-2xl px-2.5"
            >
              {genre.name}
            </span>
          ))}
        </div>
        <p className="mb-5">{movie.overview}</p>
        <p></p>
        <div className="flex gap-2.5">
          <p className="font-bold">Director</p>
          {credits?.crew?.map((member) =>
            member.job === "Director" ? (
              <p key={member.id}>{member.name}</p>
            ) : null
          )}
        </div>
        <hr />
        <div className="flex justify-between pt-10">
          <p className="text-2xl font-bold">More like this</p>
          <Link href={`/similarMovies/${params.id}`}>
            <button>See More &#8594;</button>
          </Link>
        </div>
        <div className="flex gap-10 p-10">
          {moreMovies ? (
            moreMovies
              .slice(0, 5)
              .map((movie) => (
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
      </div>

      <Footer />
    </>
  );
};

export default individual;
