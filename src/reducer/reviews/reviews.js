import {
  LOAD_REVIEWS_REQUEST,
  LOAD_REVIEWS_SUCCESS,
  LOAD_REVIEWS_ERROR,
  SEND_REVIEW_SUCCESS,
} from '../../constants/actions-type';

const initState = {
  isLoading: false,
  isError: false,
  reviews: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case (LOAD_REVIEWS_REQUEST):
      return Object.assign(
          {}, state, {
            isLoading: true,
            isError: false
          }
      );

    // TODO сделать кеш не больше 3-х
    case (LOAD_REVIEWS_SUCCESS):
      return Object.assign(
          {}, state, {
            isLoading: false,
            reviews: Object.assign(
                {}, state.reviews, {
                  [action.payload.filmId]: action.payload.reviews
                }
            )
          }
      );

    case (LOAD_REVIEWS_ERROR):
      return Object.assign(
          {}, state, {
            isLoading: false,
            isError: true,
            reviews: Object.assign(
                {}, state.reviews, {
                  [action.payload.filmId]: []
                }
            )
          }
      );

    case (SEND_REVIEW_SUCCESS):
      return Object.assign(
          {}, state, {
            reviews: Object.assign(
                {}, state.reviews, {
                  [action.payload.filmId]: action.payload.reviews
                }
            )
          }
      );

    default:
      return state;
  }
};
