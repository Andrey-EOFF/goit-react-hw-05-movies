import React, { useEffect, useState, useRef, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'services/MovieAPI';

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
    <div>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      <h1>
        {title} <span>({release_date})</span>
      </h1>
      <div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={title}
          />
        </div>
        <div>
          <p>User Score: {userScore}%</p>
          <p>Overview: {overview}</p>
          <p>Genres: {genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>

      <div>
        <h2>Aditionali</h2>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
