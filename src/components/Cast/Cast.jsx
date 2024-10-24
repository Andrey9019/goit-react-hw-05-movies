import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../utils/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CastCard from './CastCard';
import Loader from '../Loader/Loader';

const Cast = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    async function getCast() {
      try {
        setLoading(true);
        setError(false);
        const fetchedCast = await fetchCast(movieId, {
          signal: controller.signal,
        });

        setCast(fetchedCast.cast);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    }

    getCast();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <div className="py-8">
      {loading && <Loader />}
      {error &&
        toast.error(`Whoops, something went wrong. Try reloading the page`)}
      {cast.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2">
          {cast.map(actor => (
            <CastCard key={actor.id} actor={actor} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg mt-5">
          No information about the actors in this movie 😕
        </p>
      )}
      <ToastContainer autoClose={4000} theme="colored" />
    </div>
  );
};

export default Cast;
