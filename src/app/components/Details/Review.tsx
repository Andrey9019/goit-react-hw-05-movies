import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchReview } from "../../utils/api";

interface ReviewProps {
  movieId: number;
}

export default function Review({ movieId }: ReviewProps) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!movieId) return;

    const getReviews = async () => {
      try {
        const data = await fetchReview(movieId);
        setReviews(data.results?.slice(0, 3) || []);
      } catch (error) {
        toast.error("Whoops, something went wrong. Try reloading the page");
      } finally {
        setLoading(false);
      }
    };

    getReviews();
  }, [movieId]);

  return (
    <div className="max-w-screen-lg mx-auto mb-24 p-5 bg-gray-400 shadow-lg rounded-md">
      {loading ? (
        <ul className="list-none p-0 m-0">
          {Array.from({ length: 3 }).map((_, i) => (
            <li
              key={i}
              className="my-3 p-4 bg-gray-300 shadow-md rounded-md animate-pulse"
            >
              <div className="h-6 w-1/3 bg-gray-500 rounded-md mb-2"></div>
              <div className="h-4 w-5/6 bg-gray-500 rounded-md"></div>
            </li>
          ))}
        </ul>
      ) : reviews.length > 0 ? (
        <ul className="list-none p-0 m-0">
          {reviews.map(({ content, author, id }) => (
            <li key={id} className="my-3 p-4 bg-gray-300 shadow-md rounded-md">
              <h3 className="font-bold mb-1 lg:text-xl">{author}</h3>
              <p className=" text-sm lg:text-lg">{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg">There are no reviews for this movie.</p>
      )}

      <ToastContainer autoClose={4000} theme="colored" />
    </div>
  );
}
