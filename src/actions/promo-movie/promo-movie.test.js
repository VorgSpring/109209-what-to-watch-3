import {
  loadPromoMovieRequest,
  loadPromoMovieSuccess,
  loadPromoMovieError
} from './promo-movie';
import {
  LOAD_PROMO_MOVIE_REQUEST,
  LOAD_PROMO_MOVIE_SUCCESS,
  LOAD_PROMO_MOVIE_ERROR
} from '../../constants/actions-type';

describe(`promo-movie actions`, () => {
  it(`should correct return action with type LOAD_PROMO_MOVIE_REQUEST`, () => {
    expect(loadPromoMovieRequest()).toEqual({
      type: LOAD_PROMO_MOVIE_REQUEST
    });
  });

  it(`should correct return action with type LOAD_PROMO_MOVIE_SUCCESS`, () => {
    const film = {};

    expect(loadPromoMovieSuccess(film)).toEqual({
      type: LOAD_PROMO_MOVIE_SUCCESS,
      payload: film
    });
  });

  it(`should correct return action with type LOAD_PROMO_MOVIE_ERROR`, () => {
    const error = `error`;

    expect(loadPromoMovieError(error)).toEqual({
      type: LOAD_PROMO_MOVIE_ERROR,
      payload: error
    });
  });
});
