import {
  CHANGE_FAVORITES_REQUEST,
  CHANGE_FAVORITES_SUCCESS,
  CHANGE_FAVORITES_ERROR,
  LOAD_FAVORITE_FILMS_REQUEST,
  LOAD_FAVORITE_FILMS_SUCCESS,
  LOAD_FAVORITE_FILMS_ERROR
} from '../../constants/actions-type';

export const changeFavoritesRequest = () => ({
  type: CHANGE_FAVORITES_REQUEST
});

export const changeFavoritesSuccess = (film) => ({
  type: CHANGE_FAVORITES_SUCCESS,
  payload: film
});

export const changeFavoritesError = (error) => ({
  type: CHANGE_FAVORITES_ERROR,
  payload: error
});

export const loadFavoriteFilmsRequest = () => ({
  type: LOAD_FAVORITE_FILMS_REQUEST
});

export const loadFavoriteFilmsSuccess = (films) => ({
  type: LOAD_FAVORITE_FILMS_SUCCESS,
  payload: films
});

export const loadFavoriteFilmsError = (error) => ({
  type: LOAD_FAVORITE_FILMS_ERROR,
  payload: error
});

