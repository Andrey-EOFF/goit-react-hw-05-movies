import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 10px;
`;

const MovieDetails = styled.div`
  display: flex;
  align-items: flex-start;

  & > div:first-child {
    margin-right: 20px;
  }
`;

const MovieImage = styled.img`
  width: 300px;
  height: auto;
`;

const MovieInfo = styled.div`
  flex: 1;
`;

const UserScore = styled.p`
  margin-bottom: 10px;
`;

const Overview = styled.p`
  margin-bottom: 10px;
`;

const Genres = styled.p`
  margin-bottom: 10px;
`;

const AdditionalInfo = styled.div`
  margin-top: 20px;
`;

const AdditionalLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const AdditionalLink = styled.li`
  margin-bottom: 10px;
`;

export {
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
};
