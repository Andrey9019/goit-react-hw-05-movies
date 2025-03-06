import { fetchTrandingMovies } from "./utils/api";
import MoviesList from "./components/List/MoviesList";

export default async function Home() {
  const movies = await fetchTrandingMovies();

  return (
    <main>
      <h1 className="text-4xl font-bold mt-2 mb-5 text-gray-800 text-center">
        Trending movies
      </h1>
      <MoviesList movies={movies} />
    </main>
  );
}
