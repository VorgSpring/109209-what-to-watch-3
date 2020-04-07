import {
  CHANGE_FAVORITES_REQUEST,
  CHANGE_FAVORITES_SUCCESS,
  CHANGE_FAVORITES_ERROR,
  LOAD_FAVORITE_FILMS_REQUEST,
  LOAD_FAVORITE_FILMS_SUCCESS,
  LOAD_FAVORITE_FILMS_ERROR
} from '../../constants/actions-type';

const initState = {
  isChanging: false,
  isErrorChange: false,
  isLoading: false,
  isErrorLoad: false,
  films: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case (CHANGE_FAVORITES_REQUEST):
      return Object.assign(
          {}, state, {
            isChanging: true,
            isErrorChange: false
          }
      );

    case (CHANGE_FAVORITES_SUCCESS):
      return Object.assign(
          {}, state, {
            isChanging: false
          }
      );

    case (CHANGE_FAVORITES_ERROR):
      return Object.assign(
          {}, state, {
            isChanging: false,
            isErrorChange: true
          }
      );

    case (LOAD_FAVORITE_FILMS_REQUEST):
      return Object.assign(
          {}, state, {
            isLoading: true,
            isErrorLoad: false
          }
      );

    case (LOAD_FAVORITE_FILMS_SUCCESS):
      return Object.assign(
          {}, state, {
            isLoading: false,
            films: action.payload
          }
      );

    case (LOAD_FAVORITE_FILMS_ERROR):
      return Object.assign(
          {}, state, {
            isLoading: false,
            isErrorLoad: true,
            films: null
          }
      );

    default:
      return state;
  }
};
