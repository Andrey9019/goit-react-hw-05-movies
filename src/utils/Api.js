import axios from 'axios';

const API_KEY = '345007f9ab440e5b86cef51be6397df1';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  key: API_KEY,
};

// пошук популярних фільмів

export const fetchTrandingMovies = async (params = {}) => {
  const response = await axios.get(
    `/trending/movie/day?api_key=${API_KEY}`,
    params
  );
  return response.data;
};

// пошук фільмів по ID

export const fetchMoviesById = async (movieId, params = {}) => {
  const response = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}`,
    params
  );
  return response.data;
};

// фільми на сторінці movie

export const fetchMoviesByQuery = async (value, params = {}) => {
  const response = await axios.get(
    `/search/movie?query=${value}&api_key=${API_KEY}`,
    params
  );
  return response.data;
};

// пошук ревью

export const fetchReview = async (movieId, params = {}) => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`,
    params
  );
  return response.data;
};

// пошук акторів

export const fetchCast = async (movieId, params = {}) => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`,
    params
  );
  return response.data;
};
