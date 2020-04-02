import {
  loadFilmsRequest,
  loadFilmsSuccess,
  loadFilmsError
} from './films';
import {
  LOAD_FILMS_REQUEST,
  LOAD_FILMS_SUCCESS,
  LOAD_FILMS_ERROR
} from '../../constants/actions-type';

describe(`films actions`, () => {
  it(`should correct return action with type LOAD_FILMS_REQUEST`, () => {
    expect(loadFilmsRequest()).toEqual({
      type: LOAD_FILMS_REQUEST
    });
  });

  it(`should correct return action with type LOAD_FILMS_SUCCESS`, () => {
    const films = [];

    expect(loadFilmsSuccess(films)).toEqual({
      type: LOAD_FILMS_SUCCESS,
      payload: []
    });
  });

  it(`should correct return action with type LOAD_FILMS_ERROR`, () => {
    const error = `error`;

    expect(loadFilmsError(error)).toEqual({
      type: LOAD_FILMS_ERROR,
      payload: error
    });
  });
});
