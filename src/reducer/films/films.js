import {
  LOAD_FILMS_REQUEST,
  LOAD_FILMS_SUCCESS,
  LOAD_FILMS_ERROR,
  CHANGE_FAVORITES_SUCCESS
} from '../../constants/actions-type';

const initState = {
  isLoaded: false,
  isLoading: false,
  isError: false,
  films: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case (LOAD_FILMS_REQUEST):
      return Object.assign(
          {}, state, {
            isLoading: true,
            isError: false
          }
      );

    case (LOAD_FILMS_SUCCESS):
      return Object.assign(
          {}, state, {
            isLoaded: true,
            isLoading: false,
            films: action.payload
          }
      );

    case (CHANGE_FAVORITES_SUCCESS):
      return Object.assign(
          {}, state, {
            films: state.films.map((film) => {
              if (film.id === action.payload.id) {
                return action.payload;
              }
              return film;
            })
          }
      );

    case (LOAD_FILMS_ERROR):
      return Object.assign(
          {}, state, {
            isLoading: false,
            isError: true
          }
      );
    default:
      return state;
  }
};
