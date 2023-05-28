import React, { useEffect, useState, useRef, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'services/MovieAPI';

import {
  Container,
  Title,
  MovieDetails,
  MovieImage,
  MovieInfo,
  UserScore,
  Overview,
  Genres,
  AdditionalInfo,
  AdditionalLinks,
  AdditionalLink,
} from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchMovie = async () => {
      const details = await fetchMovieDetails(movieId);
      setMovieDetails(details);
    };

    fetchMovie();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const { title, release_date, poster_path, overview, genres } = movieDetails;
  const userScore = movieDetails.vote_average * 10;
  return (
    <Container>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      <Title>
        {title} <span>({release_date})</span>
      </Title>
      <MovieDetails>
        <div>
          <MovieImage
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={title}
          />
        </div>
        <MovieInfo>
          <UserScore>User Score: {userScore}%</UserScore>
          <Overview>Overview: {overview}</Overview>
          <Genres>Genres: {genres.map(genre => genre.name).join(', ')}</Genres>
        </MovieInfo>
      </MovieDetails>

      <AdditionalInfo>
        <h2>Aditionali</h2>
        <AdditionalLinks>
          <AdditionalLink>
            <Link to="cast">Cast</Link>
          </AdditionalLink>
          <AdditionalLink>
            <Link to="reviews">Reviews</Link>
          </AdditionalLink>
        </AdditionalLinks>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </AdditionalInfo>
    </Container>
  );
};

export default MovieDetailsPage;
