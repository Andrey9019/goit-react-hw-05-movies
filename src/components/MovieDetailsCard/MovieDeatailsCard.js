import {
  Container,
  InfoContainer,
  Title,
  ListItem,
  Description,
  Info,
  Image,
  AdditionalInfo,
  InfoList,
  NewLink,
} from './MovieDetailsCard.styled';

const MovieDetailsCard = ({ movies }) => {
  const { title, poster_path, vote_average, overview, genres } = movies;
  const allGenres = genres ? genres.map(genre => genre.name).join(', ') : [];
  console.log(genres);
  const defaultImg =
    'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg';
  const posterBasePath = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      <Container>
        <Image
          src={poster_path ? `${posterBasePath}${poster_path}` : defaultImg}
          alt={title}
          width="400"
        />
        <InfoContainer>
          <Title>Title: {title}</Title>
          <ul>
            <ListItem>
              <Description>User score:</Description>
              <Info>{Math.round(vote_average * 10)}%</Info>
            </ListItem>
            <ListItem>
              <Description>Overview</Description>
              <Info>{overview !== '' ? overview : 'No overview provided'}</Info>
            </ListItem>
            <ListItem>
              <Description>Genres</Description>
              <Info>{allGenres !== '' ? allGenres : 'No genres provided'}</Info>
            </ListItem>
          </ul>
        </InfoContainer>
      </Container>
      <AdditionalInfo>
        <InfoList>
          <li>
            <NewLink to="cast">Cast</NewLink>
          </li>
          <li>
            <NewLink to="review">Review</NewLink>
          </li>
        </InfoList>
      </AdditionalInfo>
    </>
  );
};

export default MovieDetailsCard;
