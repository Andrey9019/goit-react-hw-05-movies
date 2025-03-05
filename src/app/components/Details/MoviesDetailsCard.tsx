"use client";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faComment } from "@fortawesome/free-solid-svg-icons";
// import {
//   FaSadTear,
//   FaFrown,
//   FaMeh,
//   FaSmile,
//   FaLaughBeam,
// } from "react-icons/fa";

import Link from "next/link";

// const getEmojiForScore = (score) => {
//   if (score === 0 || score == null) return null; // Відсутній рейтинг
//   if (score >= 90) return <FaLaughBeam className="text-green-500" />; // Дуже високий рейтинг
//   if (score >= 70) return <FaSmile className="text-green-400" />; // Високий рейтинг
//   if (score >= 50) return <FaMeh className="text-yellow-500" />; // Середній рейтинг
//   if (score >= 30) return <FaFrown className="text-orange-500" />; // Низький рейтинг
//   return <FaSadTear className="text-red-500" />; // Дуже низький рейтинг
// };
import { useState } from "react";

import Movie from "../../types/interface";

import Cast from "./Cast";
import Review from "./Review";

interface MovieDetailsProps {
  movie: Movie;
}

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

export default function MovieDetailsCard({ movie }: MovieDetailsProps) {
  const [showReview, setShowReview] = useState(false);
  const [showCast, setShowCast] = useState(false);

  const formatDate = (dateString?: string) =>
    dateString
      ? new Date(dateString).toLocaleDateString("uk-UA", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : "No release date yet";

  const score = Math.round(movie.vote_average * 10);
  const allGenres =
    movie.genre_ids
      ?.map((id) => genreNames[id])
      .filter(Boolean)
      .join(", ") || "No genres provided";

  const defaultImg =
    "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg";
  const posterBasePath = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <div className="md:flex justify-center gap-5 mb-5 p-5 max-w-screen-xl mx-auto">
        <div className="flex justify-center">
          <img
            src={
              movie.poster_path
                ? `${posterBasePath}${movie.poster_path}`
                : defaultImg
            }
            alt={movie.title}
            className="max-h-[350px] lg:max-h-[500px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center lg:justify-around gap-5 flex-1">
          <h2 className="text-center text-4xl font-bold lg:text-7xl">
            {movie.title}
          </h2>
          <ul className="list-none p-0 m-0 text-center flex-col ">
            <li className="flex justify-center sm:justify-start gap-2 mb-3 items-center">
              <h3 className="text-xl lg:text-3xl">User score:</h3>
              <p className="text-lg lg:text-3xl">
                {score > 0 ? `${score}%` : "No rating yet"}
              </p>
              {/* <p className="text-xl lg:text-2xl">{getEmojiForScore(score)}</p> */}
            </li>
            <li className="flex flex-col items-start mb-3 sm:justify-start ">
              <h3 className=" text-xl font-bold lg:text-3xl">
                What the movie is about:
              </h3>
              <p className=" text-lg lg:text-xl">
                {movie.overview !== ""
                  ? movie.overview
                  : "No overview provided"}
              </p>
            </li>
            <li className="flex justify-center sm:justify-start gap-2 mb-3">
              <h3 className=" text-xl lg:text-2xl font-bold">Genres:</h3>
              <p className=" text-lg lg:text-2xl">
                {/* {allGenres !== "" ? allGenres : "No genres provided"} */}
              </p>
            </li>
            <li className="flex sm:justify-start gap-2 mb-3">
              <h3 className="text-xl lg:text-2xl font-bold">Release Date:</h3>
              <p className="text-lg lg:text-2xl">
                {movie.release_date
                  ? formatDate(movie.release_date)
                  : "No release date yet"}
              </p>
            </li>{" "}
          </ul>
        </div>
      </div>
      <div className="flex justify-center mx-auto">
        <ul className="flex items-center gap-12 mb-12">
          <li>
            {/* <Link */}
            {/* href="/details/review" */}
            <button
              onClick={() => setShowCast((prev) => !prev)}
              className="text-2xl border border-black rounded-lg py-1 px-6 font-semibold transition duration-250 ease-in-out hover:text-[#ff5733] hover:border-[#ff5733] no-underline duration-300  flex items-center space-x-2"
            >
              {/* <FontAwesomeIcon icon={faComment} /> */}
              <span>Cast</span>
              {/* </Link> */}
            </button>
          </li>

          <li>
            {/* <Link */}
            {/* href="/details/review" */}
            <button
              onClick={() => setShowReview((prev) => !prev)}
              className="text-2xl border border-black rounded-lg py-1 px-6 font-semibold transition duration-250 ease-in-out hover:text-[#ff5733] hover:border-[#ff5733] no-underline duration-300  flex items-center space-x-2"
            >
              {/* <FontAwesomeIcon icon={faComment} /> */}
              <span>Review</span>
              {/* </Link> */}
            </button>
          </li>
        </ul>
      </div>
      {showCast && <Cast movieId={movie.id} />}
      {showReview && <Review movieId={movie.id} />}
    </>
  );
}
