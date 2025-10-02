"use client"

import Header from "./_features/Header";
import HeroSection from "./_features/HeroSection";
import MovieList from "./_features/MovieList";
import Footer from "./_features/Footer"
import Trailer from "./_features/Trailer";

export default function Home() {

  return (
    <>
      <Header/>

      <HeroSection/>

      <MovieList
      headerTag='Upcoming'
      seeMoreDisplay={true}
      category={'upcoming'}
      routePage={'/upcoming'}
      pageNumber={'1'}/>
      <MovieList
      headerTag='Popular'
      seeMoreDisplay={true}
      category={'popular'}
      routePage={'/popular'}
      pageNumber={'1'}/>
      <MovieList
      headerTag='Top Rated'
      seeMoreDisplay={true}
      category={'top_rated'}
      routePage={'top_rated'}
      pageNumber={'1'}/>

      <Footer/>
    </>
  );
}
