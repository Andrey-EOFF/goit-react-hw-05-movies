import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchMoviesTrending } from 'services/MovieAPI';

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
    <div>
      <h1>Popular Movies</h1>
      <div>
        {movies.map(movie => (
          <Link
            key={movie.id}
            state={{ from: location }}
            to={`/movies/${movie.id}`}
          >
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
