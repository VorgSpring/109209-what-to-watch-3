import {
  LOAD_REVIEWS_REQUEST,
  LOAD_REVIEWS_SUCCESS,
  LOAD_REVIEWS_ERROR
} from '../../constants/actions-type';

export const loadReviewsRequest = () => ({
  type: LOAD_REVIEWS_REQUEST
});

export const loadReviewsSuccess = (film) => ({
  type: LOAD_REVIEWS_SUCCESS,
  payload: film
});

export const loadReviewsError = (error) => ({
  type: LOAD_REVIEWS_ERROR,
  payload: error
});

