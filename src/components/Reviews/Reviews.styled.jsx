import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const ReviewList = styled.div`
  margin-top: 10px;
`;

const ReviewItem = styled.div`
  margin-bottom: 20px;
  list-style: none;
`;

const Author = styled.p`
  font-weight: bold;
`;

const Content = styled.p`
  margin-top: 5px;
`;

const FullReviewLink = styled.a`
  display: inline-block;
  margin-top: 5px;
`;

export {
  Container,
  Title,
  ReviewList,
  ReviewItem,
  Author,
  Content,
  FullReviewLink,
};
