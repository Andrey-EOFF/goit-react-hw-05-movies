import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/MovieAPI';

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
    <div>
      <h2>Reviews</h2>
      <div>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <div key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
              <a
                href={`https://www.themoviedb.org/review/${review.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Full Review
              </a>
            </div>
          ))
        ) : (
          <p>No reviews found.</p>
        )}
      </div>
    </div>
  );
};

export default Reviews;
