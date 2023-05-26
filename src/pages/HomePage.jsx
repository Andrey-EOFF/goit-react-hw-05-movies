import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const fetchMoviesTrending = async () => {
      try {
        const apiKey = 'af8f22ea7957eefc6025d5ff3672559f';
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMoviesTrending();
  });

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
