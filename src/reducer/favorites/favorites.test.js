import reducer from './favorites';
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
import {films} from '../../mocks/films';

describe(`reducer favorites`, () => {
  it(`should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      isLoaded: false,
      isChanging: false,
      isErrorChange: false,
      isLoading: false,
      isErrorLoad: false,
      films: []
    });
  });

  it(`should handle CHANGE_FAVORITES_REQUEST`, () => {
    const action = {
      type: CHANGE_FAVORITES_REQUEST
    };

    expect(reducer(undefined, action)).toEqual({
      isLoaded: false,
      isChanging: true,
      isErrorChange: false,
      isLoading: false,
      isErrorLoad: false,
      films: []
    });
  });

  it(`should handle CHANGE_FAVORITES_SUCCESS`, () => {
    const action = {
      type: CHANGE_FAVORITES_SUCCESS,
      payload: {}
    };

    expect(reducer(undefined, action)).toEqual({
      isLoaded: false,
      isChanging: false,
      isErrorChange: false,
      isLoading: false,
      isErrorLoad: false,
      films: []
    });
  });

  it(`should handle CHANGE_FAVORITES_ERROR`, () => {
    const action = {
      type: CHANGE_FAVORITES_ERROR
    };

    expect(reducer(undefined, action)).toEqual({
      isLoaded: false,
      isChanging: false,
      isErrorChange: true,
      isLoading: false,
      isErrorLoad: false,
      films: []
    });
  });

  it(`should handle LOAD_FAVORITE_FILMS_REQUEST`, () => {
    const action = {
      type: LOAD_FAVORITE_FILMS_REQUEST
    };

    expect(reducer(undefined, action)).toEqual({
      isLoaded: false,
      isChanging: false,
      isErrorChange: false,
      isLoading: true,
      isErrorLoad: false,
      films: []
    });
  });

  it(`should handle LOAD_FAVORITE_FILMS_SUCCESS`, () => {
    const action = {
      type: LOAD_FAVORITE_FILMS_SUCCESS,
      payload: films
    };

    expect(reducer(undefined, action)).toEqual({
      isLoaded: true,
      isChanging: false,
      isErrorChange: false,
      isLoading: false,
      isErrorLoad: false,
      films
    });
  });

  it(`should handle ADD_FAVORITE_FILM`, () => {
    const action = {
      type: ADD_FAVORITE_FILM,
      payload: films[0]
    };

    expect(reducer(undefined, action)).toEqual({
      isLoaded: false,
      isChanging: false,
      isErrorChange: false,
      isLoading: false,
      isErrorLoad: false,
      films: [films[0]]
    });
  });

  it(`should handle REMOVE_FAVORITE_FILM`, () => {
    const state = {
      isChanging: false,
      isErrorChange: false,
      isLoaded: false,
      isLoading: false,
      isErrorLoad: false,
      films: [films[0]]
    };

    const action = {
      type: REMOVE_FAVORITE_FILM,
      payload: films[0].id
    };

    expect(reducer(state, action)).toEqual({
      isLoaded: false,
      isChanging: false,
      isErrorChange: false,
      isLoading: false,
      isErrorLoad: false,
      films: []
    });
  });

  it(`should handle LOAD_FAVORITE_FILMS_ERROR`, () => {
    const action = {
      type: LOAD_FAVORITE_FILMS_ERROR
    };

    expect(reducer(undefined, action)).toEqual({
      isLoaded: false,
      isChanging: false,
      isErrorChange: false,
      isLoading: false,
      isErrorLoad: true,
      films: []
    });
  });
});
