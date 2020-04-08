import {
  CHANGE_FAVORITES_REQUEST,
  CHANGE_FAVORITES_SUCCESS,
  CHANGE_FAVORITES_ERROR,
  ADD_FAVORITE_FILM,
  REMOVE_FAVORITE_FILM,
  LOAD_FAVORITE_FILMS_REQUEST,
  LOAD_FAVORITE_FILMS_SUCCESS,
  LOAD_FAVORITE_FILMS_ERROR
} from '../../constants/actions-type';

const initState = {
  isChanging: false,
  isErrorChange: false,
  isLoaded: false,
  isLoading: false,
  isErrorLoad: false,
  films: []
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
            isChanging: false,
            isErrorChange: false
          }
      );

    case (ADD_FAVORITE_FILM):
      return Object.assign(
          {}, state, {
            films: state.films.concat(action.payload)
          }
      );

    case (REMOVE_FAVORITE_FILM):
      return Object.assign(
          {}, state, {
            films: state.films.filter(({id}) => (
              id !== action.payload
            ))
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
            isLoaded: true,
            films: action.payload
          }
      );

    case (LOAD_FAVORITE_FILMS_ERROR):
      return Object.assign(
          {}, state, {
            isLoading: false,
            isErrorLoad: true
          }
      );

    default:
      return state;
  }
};
