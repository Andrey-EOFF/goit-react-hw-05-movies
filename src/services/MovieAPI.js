import axios from 'axios';

const API_KEY = 'af8f22ea7957eefc6025d5ff3672559f';
const BASE_URL = 'https://api.themoviedb.org/3';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

const fetchMoviesTrending = async () => {
  try {
    const response = await axiosInstance.get('/trending/movie/day');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};

const fetchMoviesSearch = async query => {
  try {
    const response = await axiosInstance.get('/search/movie', {
      params: {
        query,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};

const fetchMovieDetails = async movieId => {
  try {
    const response = await axiosInstance.get(`/movie/${movieId}`, {
      params: {
        append_to_response: 'credits',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};

const fetchMovieCast = async (movieId) => {
    try {
      const response = await fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
      const data = await response.json();
      return data.cast;
    } catch (error) {
      console.error('Error fetching movie cast:', error);
      return [];
    }
};
  
const fetchMovieReviews = async (movieId) => {
    try {
      const response = await fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching movie reviews:', error);
      return [];
    }
  };

export { fetchMoviesTrending, fetchMoviesSearch, fetchMovieDetails, fetchMovieCast, fetchMovieReviews };
