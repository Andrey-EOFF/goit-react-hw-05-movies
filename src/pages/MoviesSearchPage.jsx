import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const MovieSearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const fetchMoviesSearch = async () => {
      try {
        const apiKey = 'af8f22ea7957eefc6025d5ff3672559f';
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchParams.get(
            'query'
          )}`
        );
        const data = await response.json();
        setSearchResults(data.results);
      } catch (error) {
        console.error('Error searching movies:', error);
      }
    };

    if (searchParams.get('query') && searchParams.get('query').trim() !== '') {
      fetchMoviesSearch();
    } else {
      setSearchResults([]);
    }
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
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchParams.get('query') || ''}
          onChange={handleSubmit}
          placeholder="Enter movie title"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {searchResults.map(movie => (
          <Link key={movie.id} state={{ from: location }} to={`${movie.id}`}>
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

export default MovieSearchPage;
