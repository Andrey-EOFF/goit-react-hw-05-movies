import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesSearch } from 'services/MovieAPI';
import {
  Container,
  Title,
  Form,
  Input,
  Button,
  MovieList,
  MovieImage,
  MovieTitle,
} from './MovieSearchPage.styled';

const MovieSearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      const query = searchParams.get('query');

      if (query && query.trim() !== '') {
        const searchResults = await fetchMoviesSearch(query);
        setSearchResults(searchResults);
      } else {
        setSearchResults([]);
      }
    };

    fetchMovies();
  }, [searchParams]);

  const handleSubmit = event => {
    event.preventDefault();
    const searchValueId = event.target.value;
    if (searchValueId === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: searchValueId });
  };

  return (
    <Container>
      <Title>Search Movies</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={searchParams.get('query') || ''}
          onChange={handleSubmit}
          placeholder="Enter movie title"
        />
        <Button type="submit">Search</Button>
      </Form>
      <MovieList>
        {searchResults.map(movie => (
          <Link key={movie.id} state={{ from: location }} to={`${movie.id}`}>
            <MovieImage
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <MovieTitle>{movie.title}</MovieTitle>
          </Link>
        ))}
      </MovieList>
    </Container>
  );
};

export default MovieSearchPage;
