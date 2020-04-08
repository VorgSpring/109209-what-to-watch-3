import {
  changeFavoritesRequest,
  changeFavoritesSuccess,
  changeFavoritesError,
  addFavoriteFilm,
  removeFavoriteFilm,
  loadFavoriteFilmsRequest,
  loadFavoriteFilmsSuccess,
  loadFavoriteFilmsError
} from './favorites';
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

describe(`favorites actions`, () => {
  it(`should correct return action with type CHANGE_FAVORITES_REQUEST`, () => {
    expect(changeFavoritesRequest()).toEqual({
      type: CHANGE_FAVORITES_REQUEST
    });
  });

  it(`should correct return action with type CHANGE_FAVORITES_SUCCESS`, () => {
    const film = {};

    expect(changeFavoritesSuccess(film)).toEqual({
      type: CHANGE_FAVORITES_SUCCESS,
      payload: film
    });
  });

  it(`should correct return action with type CHANGE_FAVORITES_ERROR`, () => {
    const errorMessage = `error`;

    expect(changeFavoritesError(errorMessage)).toEqual({
      type: CHANGE_FAVORITES_ERROR,
      payload: errorMessage
    });
  });

  it(`should correct return action with type ADD_FAVORITE_FILM`, () => {
    const film = {};
    expect(addFavoriteFilm(film)).toEqual({
      type: ADD_FAVORITE_FILM,
      payload: film
    });
  });

  it(`should correct return action with type REMOVE_FAVORITE_FILM`, () => {
    const filmId = 1;

    expect(removeFavoriteFilm(filmId)).toEqual({
      type: REMOVE_FAVORITE_FILM,
      payload: filmId
    });
  });

  it(`should correct return action with type LOAD_FAVORITE_FILMS_REQUEST`, () => {
    expect(loadFavoriteFilmsRequest()).toEqual({
      type: LOAD_FAVORITE_FILMS_REQUEST
    });
  });

  it(`should correct return action with type LOAD_FAVORITE_FILMS_SUCCESS`, () => {
    const films = [];

    expect(loadFavoriteFilmsSuccess(films)).toEqual({
      type: LOAD_FAVORITE_FILMS_SUCCESS,
      payload: films
    });
  });

  it(`should correct return action with type LOAD_FAVORITE_FILMS_ERROR`, () => {
    const errorMessage = `error`;

    expect(loadFavoriteFilmsError(errorMessage)).toEqual({
      type: LOAD_FAVORITE_FILMS_ERROR,
      payload: errorMessage
    });
  });
});
