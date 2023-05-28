import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/MovieAPI';

import {
  Container,
  Title,
  CastList,
  ActorCard,
  ActorImage,
  ActorName,
  CharacterName,
} from './Cast.styled';

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
    <Container>
      <Title>Cast</Title>
      <CastList>
        {cast.map(actor => (
          <ActorCard key={actor.id}>
            {actor.profile_path && (
              <ActorImage
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
            )}
            <ActorName>{actor.name}</ActorName>
            <CharacterName>Character: {actor.character}</CharacterName>
          </ActorCard>
        ))}
      </CastList>
    </Container>
  );
};

export default Cast;
