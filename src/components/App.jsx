import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Review = lazy(() => import('./Review/Review'));
const NotFound = lazy(() => import('./NotFound/NotFound'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Review />} />
        </Route>
        <Route path="notFound" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
