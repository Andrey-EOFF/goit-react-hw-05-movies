import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchMoviesTrending } from 'services/MovieAPI';

import {
  Container,
  Title,
  MovieList,
  MovieImage,
  MovieTitle,
} from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      const trendingMovies = await fetchMoviesTrending();
      setMovies(trendingMovies);
    };

    fetchMovies();
  }, []);

  return (
    <Container>
      <Title>Popular Movies</Title>
      <MovieList>
        {movies.map(movie => (
          <Link
            key={movie.id}
            state={{ from: location }}
            to={`/movies/${movie.id}`}
          >
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

export default HomePage;
