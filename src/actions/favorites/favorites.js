import {
  CHANGE_FAVORITES_REQUEST,
  CHANGE_FAVORITES_SUCCESS,
  CHANGE_FAVORITES_ERROR
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
