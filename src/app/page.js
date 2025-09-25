"use client"

import Nav from "./_features/Header";
import HeroSection from "./_features/HeroSection";
import MovieList from "./_features/MovieList";
import Footer from "./_features/Footer"

export default function Home() {

  return (
    <>
      <Nav/>

      <HeroSection/>

      <MovieList
      headerTag='Upcoming'
      seeMoreDisplay={true}
      category={'upcoming'}
      routePage={'/upcoming'}/>
      <MovieList
      headerTag='Popular'
      seeMoreDisplay={true}
      category={'popular'}
      routePage={'/popular'}/>
      <MovieList
      headerTag='Top Rated'
      seeMoreDisplay={true}
      category={'top_rated'}
      routePage={'top_rated'}/>

      <Footer/>
    </>
  );
}
