import { notFound } from "next/navigation";
import { fetchMoviesById } from "../../utils/api";
import MovieDetailsCard from "../../components/Details/MoviesDetailsCard";

// Тут ми використовуємо тип 'PageProps', який надається Next.js для динамічних сторінок
type MovieDetailsProps = {
  params: {
    id: string; // expect id as a string (because Next.js params are always string)
  };
};

const MovieDetails = async ({ params }: MovieDetailsProps) => {
  const id = params.id;

  // Перетворюємо id на число
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
