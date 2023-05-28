import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesSearch } from 'services/MovieAPI';

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
