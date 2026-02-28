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
import TrailerButtonSecond from "@/app/_components/TrailerButtonSecond";
import LoadingCard from "@/app/_components/LoadingCard";
import ShortUniqueId from "short-unique-id";

const Individual = () => {
  const [movie, setMovie] = useState([]);
  const [credits, setCredits] = useState([]);
  const [moreMovies, setMoreMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [moreMoviesLoading, setMoreMoviesLoading] = useState(false);
  const [creditsLoading, setCreditsLoading] = useState(false);
  const [trailer, setTrailer] = useState([]);
  const params = useParams();

  const uid = new ShortUniqueId();

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

  useEffect(() => {
    if (!params.id) return;

    const getTrailer = async () => {
      const trailerLink = `https://api.themoviedb.org/3/movie/${params?.id}/videos?language=en-US`;

      const response = await fetch(trailerLink, options);
      const jsonData = await response.json();
      setTrailer(jsonData.results);
    };

    getTrailer();
  }, []);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await fetch(apiLink, options);
      const jsonData = await response.json();
      setMovie(jsonData);
      setLoading(false);
    };
    getData();

    const getCredits = async () => {
      setCreditsLoading(true);
      const response = await fetch(creditLink, options);
      const jsonData = await response.json();
      setCredits(jsonData);
      setCreditsLoading(false);
    };
    getCredits();

    const getMore = async () => {
      setMoreMoviesLoading(true);
      const response = await fetch(moreLikeThisLink, options);
      const jsonData = await response.json();
      setMoreMovies(jsonData.results);
      setMoreMoviesLoading(false);
    };

    getMore();
  }, [params.id]);

  moreMovies.sort((a, b) => b.popularity - a.popularity);

  return (
    <>
      <Header />

      <div className="px-10 pt-10">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2 mb-4">
            {loading ? (
              <div className="h-[50px] w-[200px] bg-gray-200 rounded-full"></div>
            ) : (
              <p className="text-2xl font-bold">{movie.original_title}</p>
            )}
            {loading ? (
              <div className="h-[50px] w-[100px] bg-gray-200 rounded-full"></div>
            ) : (
              <p>{movie.release_date}</p>
            )}
          </div>
          <div>
            <p>Rating</p>
            <div className="flex items-center gap-2">
              <StarIcon />
              <p>
                {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"} /{" "}
                <span className="text-sm text-gray-500">10</span>
              </p>
            </div>

            <p>
              {movie.vote_count
                ? movie.vote_count > 1000
                  ? (movie.vote_count / 1000).toFixed(2) + "K"
                  : movie.vote_count
                : "N/A"}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-2.5 justify-between w-full">
          <div
            className="w-full md:w-[80vw] rounded-2xl"
            style={{ background: loading ? "rgb(220,220,220)" : "none" }}
          >
            {!loading && (
              <>
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt="Backdrop"
                  width={16}
                  height={9}
                  layout="responsive"
                  className="object-cover rounded-xl"
                />
                <div>
                  <TrailerButtonSecond
                    trailer={trailer.find((t) => t?.type === "Trailer")}
                  />
                </div>
              </>
            )}
          </div>
          <div
            className="w-full md:w-[30vw] rounded-2xl"
            style={{
              background: loading ? "rgb(220,220,220)" : "none",
              minHeight: loading ? "35vh" : undefined,
            }}
          >
            {!loading && (
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt="Movie Poster"
                width={2}
                height={3}
                layout="responsive"
                className="hidden md:block object-cover rounded-xl"
              />
            )}
          </div>
        </div>
        <div className="hidden md:block py-2">
          {(movie?.genres || []).map((genre, idx) => (
            <span
              key={genre.id || idx}
              className="mr-2 border rounded-2xl px-2.5"
            >
              {loading ? "" : genre.name}
            </span>
          ))}
        </div>
        <div className="flex gap-2.5 md:hidden">
          {!loading && (
            <div
              className="w-[500px] hidden sm:block rounded-2xl"
              style={{
                background: loading ? "rgb(220,220,220)" : "none",
                minHeight: loading ? "35vh" : undefined,
              }}
            >
              {!loading && (
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt="Movie Poster"
                  width={200}
                  height={300}
                  className="object-cover rounded-xl"
                />
              )}
            </div>
          )}
          <div>
            <div className="py-2.5 flex">
              {(movie?.genres || []).map((genre, idx) => (
                <span
                  key={genre.id || idx}
                  className="mr-2 border rounded-2xl px-2.5"
                >
                  {loading ? "" : genre.name}
                </span>
              ))}
            </div>
            <p
              className="mb-5 w-full rounded-full"
              style={{
                height: loading ? "50px" : "fit-content",
                background: loading ? "rgb(220,220,220)" : "none",
              }}
            >
              {loading ? null : movie.overview}
            </p>
          </div>
        </div>

        <p
          className="hidden md:block mt-5 mb-5 w-full rounded-full"
          style={{
            height: loading ? "50px" : "fit-content",
            background: loading ? "rgb(220,220,220)" : "none",
          }}
        >
          {loading ? null : movie.overview}
        </p>
        <p></p>
        <div className="flex gap-2.5 mb-2.5">
          <p className="font-bold">Director</p>
          {creditsLoading ? (
            <span className="h-[20px] w-[100px] bg-gray-200 rounded-full"></span>
          ) : (
            credits?.crew?.map((member) =>
              member.job === "Director" ? (
                <p key={member.id}>{member.name}</p>
              ) : null,
            )
          )}
        </div>
        <hr />
        <div className="flex justify-between pt-10">
          <p className="text-2xl font-bold">More like this</p>
          <Link href={`/similarMovies/${params.id}`}>
            <button>See More &#8594;</button>
          </Link>
        </div>
        <div className="hidden md:flex gap-10 justify-between py-10 w-full">
          {moreMoviesLoading ? (
            Array.from({ length: 5 }).map(() => (
              <LoadingCard key={uid.stamp(32)} />
            ))
          ) : moreMovies ? (
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
        <div className="flex gap-10 justify-between pt-10 w-full md:hidden">
          {moreMoviesLoading ? (
            Array.from({ length: 5 }).map(() => (
              <LoadingCard key={uid.stamp(32)} />
            ))
          ) : moreMovies ? (
            moreMovies
              .slice(0, 2)
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

export default Individual;
