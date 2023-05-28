import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const CastList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const ActorCard = styled.div`
  text-align: center;
`;

const ActorImage = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 10px;
`;

const ActorName = styled.p`
  font-weight: bold;
`;

const CharacterName = styled.p`
  margin-top: 5px;
`;

export {
  Container,
  Title,
  CastList,
  ActorCard,
  ActorImage,
  ActorName,
  CharacterName,
};
