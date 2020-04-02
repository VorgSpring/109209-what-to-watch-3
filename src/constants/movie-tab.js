import {MovieOverview} from '../components/movie-overview/movie-overview.jsx';
import {MovieDetails} from '../components/movie-details/movie-details.jsx';
import {MovieReviewsContainer} from '../components/movie-reviews/movie-reviews.jsx';

export const MovieTabItems = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

export const MovieTabComponents = {
  [MovieTabItems.OVERVIEW]: MovieOverview,
  [MovieTabItems.DETAILS]: MovieDetails,
  [MovieTabItems.REVIEWS]: MovieReviewsContainer
};
