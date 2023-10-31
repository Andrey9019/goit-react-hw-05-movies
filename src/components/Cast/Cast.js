import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../utils/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { List, ListItem, Title, CharacterInfo, Card } from './Cast.styled';
import Loader from '../Loader/Loader';

const Cast = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();
  const posterBasePath = 'https://image.tmdb.org/t/p/w500';
  const defaultImg =
    'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg';
  useEffect(() => {
    const controller = new AbortController();

    async function getReview() {
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
    getReview();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <Card>
      {loading && <Loader />}
      {error &&
        toast.error(`Whoops, something went wrong. Try reloading the page`)}
      {cast.length > 0 ? (
        <List>
          {cast.map(actor => {
            const { name, character, profile_path } = actor;
            return (
              <ListItem key={name}>
                <img
                  src={
                    profile_path
                      ? `${posterBasePath}${profile_path}`
                      : defaultImg
                  }
                  alt={name}
                  width="100"
                />
                <Title>{name}</Title>
                <CharacterInfo>Character: {character}</CharacterInfo>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <p>No information about the actors in this movie</p>
      )}
      <ToastContainer autoClose={4000} theme="colored" />
    </Card>
  );
};

export default Cast;
