import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/MovieAPI';

import {
  Container,
  Title,
  ReviewList,
  ReviewItem,
  Author,
  Content,
  FullReviewLink,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewsData = await fetchMovieReviews(movieId);
      setReviews(reviewsData);
    };

    fetchReviews();
  }, [movieId]);

  return (
    <Container>
      <Title>Reviews</Title>
      <ReviewList>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <ReviewItem key={review.id}>
              <Author>Author: {review.author}</Author>
              <Content>{review.content}</Content>
              <FullReviewLink
                href={`https://www.themoviedb.org/review/${review.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Full Review
              </FullReviewLink>
            </ReviewItem>
          ))
        ) : (
          <p>No reviews found.</p>
        )}
      </ReviewList>
    </Container>
  );
};

export default Reviews;
