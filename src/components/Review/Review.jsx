import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchReview } from '../../utils/Api';
import Loader from '../Loader/Loader';

const Review = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [reviews, setReview] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    async function getReview() {
      try {
        setLoading(true);
        setError(false);
        const fetchedReview = await fetchReview(movieId, {
          signal: controller.signal,
        });

        setReview(fetchedReview.results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    }
    getReview();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <div className="max-w-screen-lg mx-auto mb-24 p-5 bg-gray-400 shadow-lg rounded-md">
      {loading && <Loader />}
      {error &&
        toast.error(`Whoops, something went wrong. Try reloading the page`)}
      {reviews.length > 0 ? (
        <ul className="list-none p-0 m-0">
          {reviews.map(review => {
            const { content, author } = review;
            return (
              <li
                key={author}
                className="my-3 p-4 bg-gray-300 shadow-md rounded-md"
              >
                <h3 className="font-bold mb-1 lg:text-xl">{author}</h3>
                <p className=" text-sm lg:text-lg">{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className=" text-lg">There is no review for this movie</p>
      )}
      <ToastContainer autoClose={4000} theme="colored" />
    </div>
  );
};

export default Review;
