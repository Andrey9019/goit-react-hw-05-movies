import { notFound } from "next/navigation";
import { fetchMoviesById } from "../../utils/api";
import MovieDetailsCard from "../../components/Details/MoviesDetailsCard";

const MovieDetails = async ({ params }: { params: any }) => {
  const id = params.id;
  const numericId = parseInt(id);

  if (isNaN(numericId)) {
    return notFound();
  }

  try {
    const movie = await fetchMoviesById(numericId);

    return (
      <main className="container">
        <MovieDetailsCard movie={movie} />
      </main>
    );
  } catch (error) {
    console.log(error);
    return notFound();
  }
};

export default MovieDetails;
