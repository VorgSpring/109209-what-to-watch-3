import {
  changeFavoritesRequest,
  changeFavoritesSuccess,
  changeFavoritesError
} from './favorites';
import {
  CHANGE_FAVORITES_REQUEST,
  CHANGE_FAVORITES_SUCCESS,
  CHANGE_FAVORITES_ERROR
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
});
