import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #c4f6f6;
  border: none;
  cursor: pointer;
`;

const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const MovieImage = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 10px;
`;

const MovieTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 5px;
`;

export {
  Container,
  Title,
  Form,
  Input,
  Button,
  MovieList,
  MovieImage,
  MovieTitle,
};
