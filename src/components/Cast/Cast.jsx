import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/MovieAPI';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      const castData = await fetchMovieCast(movieId);
      setCast(castData);
    };

    fetchCast();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <div>
        {cast.map(actor => (
          <div key={actor.id}>
            {actor.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
            )}
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cast;
