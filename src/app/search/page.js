import Header from "../_features/Header";
import Footer from "../_features/Footer";
import Card from "../_components/Cards";
import PageList from "../_features/PageList";

export default async function SearchResults({ searchParams }) {
  const query = searchParams.query || "";
  const page = Number(searchParams.page) || 1;

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=${page}`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
      },
      cache: "no-store",
    },
  );

  const data = await response.json();

  const sortedResults =
    data.results?.sort((a, b) => b.popularity - a.popularity) || [];

  return (
    <>
      <Header />
      <p className="pl-10 pt-10 text-xl">
        Showing Results For: <span className="font-bold">{query}</span>
      </p>

      <div className="grid grid-cols-5 grid-rows-2 gap-10 mb-8 p-10">
        {sortedResults.length > 0 ? (
          sortedResults
            .slice(0, 15)
            .map((movie) => (
              <Card
                key={movie.id}
                movId={movie.id}
                alt={movie.title}
                title={movie.title}
                imageSource={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                rating={movie.vote_average?.toFixed(1)}
              />
            ))
        ) : (
          <p>No results.</p>
        )}
      </div>

      <PageList currentPage={page} query={query} />
      <Footer />
    </>
  );
}
