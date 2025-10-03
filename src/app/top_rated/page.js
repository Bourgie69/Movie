"use client";

import Header from "../_features/Header";
import MovieList from "../_features/MovieList";
import PageList from "../_features/PageList";
import Footer from "../_features/Footer";
import { useEffect, useState } from "react";

const MoviesPage = () => {
  const [pageSlider, setPageSlider] = useState(1);

  return (
    <>
      <Header />

      <MovieList
        headerTag="Top Rated"
        seeMoreDisplay={false}
        category={"top_rated"}
        pageNumber={pageSlider}
      />

      <PageList page={pageSlider} setPage={setPageSlider} />

      <Footer />
    </>
  );
};

export default MoviesPage;
