import {
  LOAD_PROMO_MOVIE_REQUEST,
  LOAD_PROMO_MOVIE_SUCCESS,
  LOAD_PROMO_MOVIE_ERROR
} from '../../constants/actions-type';

export const loadPromoMovieRequest = () => ({
  type: LOAD_PROMO_MOVIE_REQUEST
});

export const loadPromoMovieSuccess = (film) => ({
  type: LOAD_PROMO_MOVIE_SUCCESS,
  payload: film
});

export const loadPromoMovieError = (error) => ({
  type: LOAD_PROMO_MOVIE_ERROR,
  payload: error
});

