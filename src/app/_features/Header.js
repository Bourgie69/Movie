"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import LogoPurple from "../_icons/LogoPurple";
import DropDownIcon from "../_icons/DropDownIcon";
import DropDownIconWhite from "../_icons/DropDownIconWhite";
import SearchIcon from "../_icons/SearchIcon";
import MoonIcon from "../_icons/MoonIcon";
import SunIcon from "../_icons/SunIcon";
import SearchDropDown from "./SearchDropDown";
import SearchIconWhite from "../_icons/SearchIconWhite";
import LogoWhite from "../_icons/LogoWhite";

const Header = () => {
  const [searchParams, setSearchParams] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  const [genres, setGenres] = useState([]);
  const [showGenres, setShowGenres] = useState(false);
  const [loading, setLoading] = useState(false);

  const genreLink = `https://api.themoviedb.org/3/genre/movie/list?language=en`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
    },
  };

  const genrePage = (genreId) => {
    window.location.href = `/genres/${genreId}`;
  };

  const getGenres = async () => {
    setLoading(true);
    const response = await fetch(genreLink, options);
    const jsonData = await response.json();
    setGenres(jsonData.genres);
    setLoading(false);
  };

  useEffect(() => {
    getGenres();
  }, [showGenres]);

  const handleSearch = (e) => {
    setSearchParams(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      window.location.href = `/search?query=${searchParams}`;
    }
  };

  return (
    <>
      <nav
        className="flex justify-around items-center p-2 shadow"
        style={{ background: darkMode ? "black" : "white" }}
      >
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            {darkMode ? <LogoWhite /> : <LogoPurple />}

            {!darkMode ? (
              <p className="italic font-bold text-purple-500 text-lg">
                Movie Z
              </p>
            ) : (
              <p className="italic font-bold text-white text-lg">Movie Z</p>
            )}
          </div>
        </Link>

        <div className="flex gap-6 items-center">
          <div
            className="flex items-center gap-2 p-2 border rounded-sm cursor-pointer"
            onClick={() => {
              setShowGenres(!showGenres);
            }}
            style={{
              color: darkMode ? "white" : "black",
              border: darkMode ? "solid-white" : "solid-black",
            }}
          >
            {darkMode ? <DropDownIconWhite /> : <DropDownIcon />}

            <p className="text-sm">Genre</p>
          </div>
          <div
            className="flex border items-center rounded-sm p-2 gap-3 w-[400px]"
            style={{
              border: darkMode ? "solid-white" : "solid-black",
              color: darkMode ? "white" : "black",
            }}
          >
            {darkMode ? <SearchIconWhite /> : <SearchIcon />}

            <input
              className="w-full focus:outline-none"
              placeholder="Search..."
              onChange={handleSearch}
              onKeyDown={handleEnter}
              name="search"
              value={searchParams}
            />
          </div>
        </div>

        <button
          className=" w-8 h-8 rounded-lg flex items-center justify-center border bg-white"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <SunIcon /> : <MoonIcon />}
        </button>
      </nav>

      <div
        className="text-xs h-[fit] w-[fit] border bg-white absolute left-85 z-10 mt-2 p-4 rounded-xl"
        style={{ display: showGenres ? "block" : "none" }}
      >
        <p className="text-2xl font-semibold">Genres</p>
        <p className="text-lg ">See lists of movies by genre</p>
        <hr />
        <div className="grid grid-cols-4 gap-x-5 gap-y-2 pt-2">
          {loading ? (
            <p>Loading</p>
          ) : (
            genres.map((genre) => (
              <span
                className="border h-fit w-fit py-0.5 px-2.5 rounded-3xl hover:cursor-pointer"
                key={genre.id}
                onClick={() => genrePage(genre.id)}
              >
                {genre.name}
              </span>
            ))
          )}
        </div>
      </div>

      <SearchDropDown searchParam={searchParams} />
    </>
  );
};

export default Header;
