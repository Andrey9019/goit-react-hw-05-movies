import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchMoviesByQuery } from '../utils/Api';
import Form from '../components/Form/Form';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from '../components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const controller = new AbortController();
    if (!query) {
      return;
    }
    async function getMoviesPage() {
      try {
        setLoading(true);
        setError(false);
        const fetchMoviesPage = await fetchMoviesByQuery(query, {
          signal: controller.signal,
        });

        setMovies(fetchMoviesPage.results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    }
    getMoviesPage();
    return () => {
      controller.abort();
    };
  }, [query]);

  const onSubmit = value => {
    if (query === value) {
      return toast.info('Nothing found, please try something else');
    }
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <main>
      {loading && <Loader />}
      {error &&
        toast.error(`Oops, something went wrong. Try reloading the page`)}
      <Form onSubmit={onSubmit} hasResults={movies.length > 0} />{' '}
      {movies.length > 0 && <MoviesList movies={movies} />}
      <ToastContainer autoClose={4000} theme="colored" />
    </main>
  );
};

export default Movies;
