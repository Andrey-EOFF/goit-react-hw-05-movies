import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Movie = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchMoviesSearch = async () => {
      try {
        const apiKey = 'af8f22ea7957eefc6025d5ff3672559f';
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`
        );
        const data = await response.json();
        setSearchResults(data.results);
      } catch (error) {
        console.error('Error searching movies:', error);
      }
    };

    if (searchTerm.trim() !== '') {
        fetchMoviesSearch();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleSearch = event => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
          placeholder="Enter movie title"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {searchResults.map(movie => (
          <Link key={movie.id} to={`${movie.id}`}>
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

export default Movie;
