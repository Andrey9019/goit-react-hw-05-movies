import { Link, useLocation } from 'react-router-dom';
import { List, ListItem, Title, Image, Section } from './MoviesList.styled';

const defaultImg =
  'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg';
const posterBaseURL = 'https://image.tmdb.org/t/p/w500';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <Section>
      <>
        <List>
          {movies.map(({ id, title, poster_path }) => (
            <ListItem key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <Image
                  src={
                    poster_path ? `${posterBaseURL}${poster_path}` : defaultImg
                  }
                  alt={title}
                  width="200"
                />
                <Title>{title}</Title>
              </Link>
            </ListItem>
          ))}
        </List>
      </>
    </Section>
  );
};

export default MoviesList;
