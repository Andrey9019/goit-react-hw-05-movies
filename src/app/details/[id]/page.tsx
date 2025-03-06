import { notFound } from "next/navigation";
import { fetchMoviesById } from "../../utils/api";

// import Loader from "../components/Loader/Loader";

import MovieDetailsCard from "../../components/Details/MoviesDetailsCard";

interface MovieDetailsProps {
  params: { id: number };
}

export default async function MovieDetails({ params }: MovieDetailsProps) {
  const id = params.id;

  try {
    const movie = await fetchMoviesById(id);

    return (
      <main className="container">
        <MovieDetailsCard movie={movie} />
      </main>
    );
  } catch (error) {
    console.log(error);
    // return notFound()
  }
}
