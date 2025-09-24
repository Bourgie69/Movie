import Header from "../_features/Header";
import MovieList from "../_features/MovieList";
import PageList from "../_features/PageList";
import Footer from "../_features/Footer";

const MoviesPage = () => {
  return (
    <>
      <Header />

      <MovieList headerTag="Upcoming" seeMoreDisplay={false} />

      <PageList />

      <Footer/>
    </>
  );
};

export default MoviesPage;
