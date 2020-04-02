import {
  LOAD_PROMO_MOVIE_REQUEST,
  LOAD_PROMO_MOVIE_SUCCESS,
  LOAD_PROMO_MOVIE_ERROR,
  CHANGE_FAVORITES_SUCCESS
} from '../../constants/actions-type';

const initState = {
  isLoading: false,
  isError: false,
  film: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case (LOAD_PROMO_MOVIE_REQUEST):
      return Object.assign(
          {}, state, {
            isLoading: true,
            isError: false
          }
      );

    case (LOAD_PROMO_MOVIE_SUCCESS):
      return Object.assign(
          {}, state, {
            isLoading: false,
            film: action.payload
          }
      );

    case (LOAD_PROMO_MOVIE_ERROR):
      return Object.assign(
          {}, state, {
            isLoading: false,
            isError: true
          }
      );

    case (CHANGE_FAVORITES_SUCCESS):
      return Object.assign(
          {}, state, {
            film: action.payload
          }
      );
    default:
      return state;
  }
};
