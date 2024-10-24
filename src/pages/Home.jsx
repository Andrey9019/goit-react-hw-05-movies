import { fetchTrandingMovies } from '../utils/Api';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import MoviesList from '../components/MoviesList/MoviesList';
import Loader from '../components/Loader/Loader';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function getHomePageMovies() {
      try {
        setLoading(true);
        setError(false);
        const fetchHomePageMovies = await fetchTrandingMovies({
          signal: controller.signal,
        });
        setMovies(fetchHomePageMovies.results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    }
    getHomePageMovies();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <h1 className="text-4xl font-bold mt-2 mb-5 text-gray-800 text-center">
        Trending movies
      </h1>

      {loading && <Loader />}
      {error &&
        toast.error(`Oops, something went wrong. Try reloading the page`)}
      <MoviesList movies={movies} />
      <ToastContainer autoClose={4000} theme="colored" />
    </>
  );
};
export default Home;
