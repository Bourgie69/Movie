"use client";
import Header from "../_features/Header";
import Footer from "../_features/Footer";
import Card from "../_components/Cards";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

const SearchResults = ({ search }) => {

  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiLink = `https://api.themoviedb.org/3/search/movie?query=${new URLSearchParams(
    window.location.search
  ).get("query")}&language=en-US&page=1`;

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
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [search]);

  searchResults.sort((a, b) => b.popularity - a.popularity);

  return (
    <>
      <Header />
      <p className="pl-10 pt-10 text-xl">
        Showing Results For:{" "}
        <span className="font-bold">
          {new URLSearchParams(window.location.search).get("query")}
        </span>
      </p>
      <div className="grid grid-cols-5 grid-rows-2 gap-10 mb-8 p-10">
        {loading ? (
          <p>Loading...</p>
        ) : (
          searchResults.slice(0, 15).map((movie) => (
              <Card
                key={movie.id}
                movId={movie.id}
                alt={movie.title}
                title={movie.title}
                imageSource={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                rating={movie.vote_average?.toFixed(1)}
              />
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default SearchResults;
