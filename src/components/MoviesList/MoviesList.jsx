import { Link, useLocation } from 'react-router-dom';

const defaultImg =
  'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg';
const posterBaseURL = 'https://image.tmdb.org/t/p/w500';

const genreNames = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  10751: 'Family',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  27: 'Horror',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
};

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <section className="text-center">
      <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 p-0 list-none m-0">
        {movies.map(({ id, title, poster_path, vote_average, genre_ids }) => {
          // Отримуємо назви жанрів, відображаємо максимум 3
          const allGenres = genre_ids
            .map(id => genreNames[id])
            .filter(Boolean) // Видаляємо undefined значення
            .slice(0, 3) // Беремо перші три жанри
            .join(', ');

          return (
            <li
              key={id}
              className="relative rounded-md shadow-[0_2px_4px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-300 ease-in-out hover:shadow-[0_6px_8px_rgba(0,0,0,0.6)] hover:scale-105"
            >
              <Link
                to={`/movies/${id}`}
                state={{ from: location }}
                className="block text-inherit no-underline"
              >
                <img
                  src={
                    poster_path ? `${posterBaseURL}${poster_path}` : defaultImg
                  }
                  alt={title}
                  width="200"
                  className="object-cover w-full h-full"
                />
                <div className="p-4 text-lg font-medium text-white bg-[rgba(0,0,0,0.4)] absolute bottom-0 left-0 w-full box-border">
                  <p className="mb-1">{title}</p>
                  {vote_average > 0 && (
                    <p className="text-sm">Rating: {vote_average.toFixed(1)}</p>
                  )}
                  {allGenres && <p className="text-sm">Genres: {allGenres}</p>}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default MoviesList;
