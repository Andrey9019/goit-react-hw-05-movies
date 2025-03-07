import Link from "next/link";
import Movie from "../../types/interface";
import Image from "next/image";

interface MoviesProps {
  movies: Movie[];
}
const defaultImg =
  "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg";
const posterBaseURL = "https://image.tmdb.org/t/p/w500";

const genreNames: { [key: number]: string } = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  10751: "Family",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  27: "Horror",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

export default function MoviesList({ movies }: MoviesProps) {
  return (
    <section className="container">
      <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 p-3 list-none m-0">
        {movies.map(({ id, title, poster_path, vote_average, genre_ids }) => {
          const allGenres = genre_ids
            .map((id) => genreNames[id])
            .filter(Boolean)
            .slice(0, 3)
            .join(", ");

          return (
            <li
              key={id}
              className="relative rounded-md shadow-[0_2px_4px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-300 ease-in-out hover:shadow-[0_6px_8px_rgba(0,0,0,0.6)] hover:scale-105"
            >
              <Link
                href={`/details/${id}`}
                className="block h-full w-full text-inherit no-underline"
              >
                <div>
                  <Image
                    src={
                      poster_path
                        ? `${posterBaseURL}${poster_path}`
                        : defaultImg
                    }
                    alt={title}
                    width={200}
                    height={300}
                    className="object-cover w-full"
                  />
                  <div className="p-1 font-normal text-gray-700">
                    <p className="text-sm font-medium mb-1 md:text-lg lg:text-xl md:font-semibold">
                      {title}
                    </p>
                    {vote_average > 0 && (
                      <p className="text-xs md:text-base lg:text-lg md:font-normal">
                        Rating: {vote_average.toFixed(1)}
                      </p>
                    )}
                    {allGenres && (
                      <p className="text-xs md:text-sm lg:text-base md:font-normal">
                        Genres: {allGenres}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
