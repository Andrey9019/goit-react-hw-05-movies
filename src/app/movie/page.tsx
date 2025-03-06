"use client";

import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchMoviesByQuery } from "../utils/api";
import Form from "../components/Form/Form";
import MoviesList from "../components/List/MoviesList";
import Loader from "../components/Loader/Loader";

const Movies = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const { data, error, isValidating } = useSWR(
    query ? `/movie?query=${query}` : null,
    () => fetchMoviesByQuery(query)
  );

  const movies = data || [];

  return (
    <main>
      <Form initialQuery={query} />
      {isValidating && <Loader />}
      {error &&
        toast.error("Oops, something went wrong. Try reloading the page")}
      {movies.length > 0 ? (
        <MoviesList movies={movies} />
      ) : (
        !isValidating && <p className="text-center text-xl">No results</p>
      )}
    </main>
  );
};

export default Movies;
