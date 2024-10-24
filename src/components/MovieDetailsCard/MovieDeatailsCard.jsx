import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComment } from '@fortawesome/free-solid-svg-icons';

const MovieDetailsCard = ({ movies }) => {
  const { title, poster_path, vote_average, overview, genres, release_date } =
    movies;
  const allGenres = genres ? genres.map(genre => genre.name).join(', ') : [];
  const formatDate = dateString => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('uk-UA', options);
  };

  const defaultImg =
    'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg';
  const posterBasePath = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
      <div className="md:flex justify-center gap-5 mb-5 p-5 max-w-screen-xl mx-auto">
        <div className="flex justify-center">
          <img
            src={poster_path ? `${posterBasePath}${poster_path}` : defaultImg}
            alt={title}
            className="max-h-[350px] lg:max-h-[500px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center lg:justify-around gap-5 flex-1">
          <h2 className="text-center text-4xl font-bold lg:text-7xl">
            {title}
          </h2>

          <ul className="list-none p-0 m-0 text-center flex-col ">
            <li className="flex justify-center sm:justify-start gap-2 mb-3 ">
              <h3 className=" text-xl lg:text-3xl">User score:</h3>
              <p className=" text-lg lg:text-3xl">
                {Math.round(vote_average * 10)}%
              </p>
              {/* тут нужно будет что-то со смайликами придумать */}
            </li>
            <li className="flex flex-col items-start mb-3 sm:justify-start ">
              <h3 className=" text-xl font-bold lg:text-3xl">
                What the movie is about:
              </h3>
              <p className=" text-lg lg:text-2xl">
                {overview !== '' ? overview : 'No overview provided'}
              </p>
            </li>
            <li className="flex justify-center sm:justify-start gap-2 mb-3">
              <h3 className=" text-xl lg:text-2xl font-bold">Genres:</h3>
              <p className=" text-lg lg:text-2xl">
                {allGenres !== '' ? allGenres : 'No genres provided'}
              </p>
            </li>
            <li className="flex sm:justify-start gap-2 mb-3">
              <h3 className="text-xl lg:text-2xl font-bold">Release Date:</h3>
              <p className="text-lg lg:text-2xl">
                {release_date
                  ? formatDate(release_date)
                  : 'No release date yet'}
              </p>
            </li>{' '}
          </ul>
        </div>
      </div>
      <div className="flex justify-center mx-auto">
        <ul className="flex items-center gap-12 mb-12">
          <li>
            <Link
              to="cast"
              className="text-2xl border border-black rounded-lg py-1 px-6 font-semibold transition duration-250 ease-in-out hover:text-[#ff5733] hover:border-[#ff5733] no-underline duration-300  flex items-center space-x-2"
            >
              <FontAwesomeIcon icon={faUser} />
              <span>Cast</span>
            </Link>
          </li>
          <li>
            <Link
              to="review"
              className="text-2xl border border-black rounded-lg py-1 px-6 font-semibold transition duration-250 ease-in-out hover:text-[#ff5733] hover:border-[#ff5733] no-underline duration-300  flex items-center space-x-2"
            >
              <FontAwesomeIcon icon={faComment} />
              <span>Review</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MovieDetailsCard;
