import axios from "axios";
import Movie from "../types/interface";
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

if (!API_KEY) {
  throw new Error("Missing NEXT_PUBLIC_TMDB_API_KEY in .env.local");
}

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: { api_key: API_KEY },
});

// типізація фільмів

// типізація відповіді

export interface ApiResponse<T> {
  results: T[];
}

// пошук популярних фільмів

export const fetchTrandingMovies = async (): Promise<Movie[]> => {
  const response = await api.get<ApiResponse<Movie>>(`/trending/movie/day`);
  return response.data.results;
};

// пошук фільмів по ID

export const fetchMoviesById = async (movieId: number): Promise<Movie> => {
  const response = await api.get<Movie>(`/movie/${movieId}`);
  return response.data;
};

// фільми на сторінці movie

export const fetchMoviesByQuery = async (query: string): Promise<Movie[]> => {
  const response = await api.get<ApiResponse<Movie>>(`/search/movie`, {
    params: { query },
  });
  return response.data.results;
};

// пошук ревью

export const fetchReview = async (movieId: number) => {
  const response = await api.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};

// пошук акторів

export const fetchCast = async (movieId: number) => {
  const response = await api.get(`/movie/${movieId}/credits`);
  return response.data.cast;
};
