import {
  LOAD_FILMS_REQUEST,
  LOAD_FILMS_SUCCESS,
  LOAD_FILMS_ERROR
} from '../../constants/actions-type';

export const loadFilmsRequest = () => ({
  type: LOAD_FILMS_REQUEST
});

export const loadFilmsSuccess = (films) => ({
  type: LOAD_FILMS_SUCCESS,
  payload: films
});

export const loadFilmsError = (error) => ({
  type: LOAD_FILMS_ERROR,
  payload: error
});

