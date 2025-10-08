'use client'

import Header from "../_features/Header";
import MovieList from "../_features/MovieList";
import PageList from "../_features/PageList";
import Footer from "../_features/Footer";
import { useState } from "react";

const MoviesPage = () => {
  const [pageSlider, setPageSlider] = useState(1)
  const [loading, setLoading] = useState(false)
  return (
    <>
      <Header />
    
      <MovieList
        headerTag="Popular"
        seeMoreDisplay={false}
        category={"popular"}
        pageNumber={pageSlider}
      />

      <PageList 
      page={pageSlider}
      setPage={setPageSlider}/>

      <Footer />
    </>
  );
};

export default MoviesPage;
