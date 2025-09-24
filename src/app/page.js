"use client"

import Nav from "./_features/Header";
import HeroSection from "./_features/HeroSection";
import MovieList from "./_features/MovieList";
import Footer from "./_features/Footer"
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState([])

  return (
    <>
      <Nav/>

      <HeroSection/>

      <MovieList
      headerTag='Upcoming'
      seeMoreDisplay={true}/>
      <MovieList
      headerTag='Popular'
      seeMoreDisplay={true}/>
      <MovieList
      headerTag='Top Rated'
      seeMoreDisplay={true}/>

      <Footer/>
    </>
  );
}
