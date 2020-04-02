import reducer from './favorites';
import {
  CHANGE_FAVORITES_REQUEST,
  CHANGE_FAVORITES_SUCCESS,
  CHANGE_FAVORITES_ERROR
} from '../../constants/actions-type';

describe(`reducer favorites`, () => {
  it(`should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      isLoading: false,
      isError: false
    });
  });

  it(`should handle CHANGE_FAVORITES_REQUEST`, () => {
    const action = {
      type: CHANGE_FAVORITES_REQUEST
    };

    expect(reducer(undefined, action)).toEqual({
      isLoading: true,
      isError: false
    });
  });

  it(`should handle CHANGE_FAVORITES_SUCCESS`, () => {
    const action = {
      type: CHANGE_FAVORITES_SUCCESS,
      payload: {}
    };

    expect(reducer(undefined, action)).toEqual({
      isLoading: false,
      isError: false
    });
  });

  it(`should handle LOAD_FILMS_REQUEST`, () => {
    const action = {
      type: CHANGE_FAVORITES_ERROR
    };

    expect(reducer(undefined, action)).toEqual({
      isLoading: false,
      isError: true
    });
  });
});
