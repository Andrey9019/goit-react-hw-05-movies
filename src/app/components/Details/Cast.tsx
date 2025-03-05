import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { fetchCast } from "../../utils/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CastCard from "./CastCard";

// import Loader from "../Loader/Loader";

interface CastProps {
  movieId: number;
}

export default function Cast({ movieId }: CastProps) {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const getCast = async () => {
      try {
        const data = await fetchCast(movieId);

        setCast(data.cast?.slice(0, 12) || []);
      } catch (error) {
        toast.error("Whoops, something went wrong. Try reloading the page");
      } finally {
        setLoading(false);
      }
    };

    getCast();
  }, [movieId]);

  return (
    <div className="py-8">
      {/* {loading && <Loader />} */}

      {cast.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2">
          {cast.map((actor, id) => (
            <CastCard key={id} actor={actor} />
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
}
