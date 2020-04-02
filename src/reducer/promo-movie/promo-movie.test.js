import reducer from './promo-movie';
import {
  LOAD_PROMO_MOVIE_REQUEST,
  LOAD_PROMO_MOVIE_SUCCESS,
  LOAD_PROMO_MOVIE_ERROR,
  CHANGE_FAVORITES_SUCCESS
} from '../../constants/actions-type';
import {films} from '../../mocks/films';

describe(`reducer promo-movie`, () => {
  it(`should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      isLoading: false,
      isError: false,
      film: null
    });
  });

  it(`should handle LOAD_PROMO_MOVIE_REQUEST`, () => {
    const action = {
      type: LOAD_PROMO_MOVIE_REQUEST
    };

    expect(reducer(undefined, action)).toEqual({
      isLoading: true,
      isError: false,
      film: null
    });
  });

  it(`should handle LOAD_PROMO_MOVIE_SUCCESS`, () => {
    const action = {
      type: LOAD_PROMO_MOVIE_SUCCESS,
      payload: {}
    };

    expect(reducer(undefined, action)).toEqual({
      isLoading: false,
      isError: false,
      film: {}
    });
  });

  it(`should handle LOAD_PROMO_MOVIE_REQUEST`, () => {
    const action = {
      type: LOAD_PROMO_MOVIE_ERROR
    };

    expect(reducer(undefined, action)).toEqual({
      isLoading: false,
      isError: true,
      film: null
    });
  });

  it(`should handle CHANGE_FAVORITES_SUCCESS`, () => {
    const state = {
      isLoading: false,
      isError: false,
      film: films[0]
    };

    const film = Object.assign({}, films[0], {
      isFavorite: true
    });

    const action = {
      type: CHANGE_FAVORITES_SUCCESS,
      payload: film
    };

    expect(reducer(state, action)).toEqual({
      isLoading: false,
      isError: false,
      film
    });
  });
});
