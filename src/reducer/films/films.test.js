import reducer from './films';
import {
  LOAD_FILMS_REQUEST,
  LOAD_FILMS_SUCCESS,
  LOAD_FILMS_ERROR,
  CHANGE_FAVORITES_SUCCESS
} from '../../constants/actions-type';
import {films} from '../../mocks/films';

describe(`reducer films`, () => {
  it(`should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      isLoaded: false,
      isLoading: false,
      isError: false,
      films: []
    });
  });

  it(`should handle LOAD_FILMS_REQUEST`, () => {
    const action = {
      type: LOAD_FILMS_REQUEST
    };

    expect(reducer(undefined, action)).toEqual({
      isLoaded: false,
      isLoading: true,
      isError: false,
      films: []
    });
  });

  it(`should handle LOAD_FILMS_SUCCESS`, () => {
    const action = {
      type: LOAD_FILMS_SUCCESS,
      payload: films
    };

    expect(reducer(undefined, action)).toEqual({
      isLoaded: true,
      isLoading: false,
      isError: false,
      films
    });
  });

  it(`should handle LOAD_FILMS_REQUEST`, () => {
    const action = {
      type: LOAD_FILMS_ERROR
    };

    expect(reducer(undefined, action)).toEqual({
      isLoaded: false,
      isLoading: false,
      isError: true,
      films: []
    });
  });

  it(`should handle CHANGE_FAVORITES_SUCCESS`, () => {
    const state = {
      isLoaded: false,
      isLoading: false,
      isError: false,
      films: [films[0], films[1]]
    };

    const film = Object.assign({}, films[0], {
      isFavorite: true
    });

    const action = {
      type: CHANGE_FAVORITES_SUCCESS,
      payload: film
    };

    expect(reducer(state, action)).toEqual({
      isLoaded: false,
      isLoading: false,
      isError: false,
      films: [film, films[1]]
    });
  });
});
