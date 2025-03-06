import { notFound } from "next/navigation";
import { fetchMoviesById } from "../../utils/api";
import { GetServerSideProps } from "next";

import MovieDetailsCard from "../../components/Details/MoviesDetailsCard";

interface MovieDetailsProps {
  params: { id: number };
}

const MovieDetails = async ({ params }: MovieDetailsProps) => {
  const id = params?.id;

  try {
    const movie = await fetchMoviesById(id);

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
