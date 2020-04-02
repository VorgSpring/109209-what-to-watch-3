import reducer from './authorization';
import {
  AUTHORIZATION_REQUEST,
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_ERROR
} from '../../constants/actions-type';

describe(`reducer authorization`, () => {
  it(`should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      isLoading: false,
      isAuthorizationRequired: true,
      errorMessage: null
    });
  });

  it(`should handle AUTHORIZATION_REQUEST`, () => {
    const action = {
      type: AUTHORIZATION_REQUEST
    };

    expect(reducer(undefined, action)).toEqual({
      isLoading: true,
      isAuthorizationRequired: true,
      errorMessage: null
    });
  });

  it(`should handle AUTHORIZATION_SUCCESS`, () => {
    const action = {
      type: AUTHORIZATION_SUCCESS
    };

    expect(reducer(undefined, action)).toEqual({
      isLoading: false,
      isAuthorizationRequired: false,
      errorMessage: null
    });
  });

  it(`should handle AUTHORIZATION_ERROR`, () => {
    const errorMessage = `error`;
    const action = {
      type: AUTHORIZATION_ERROR,
      payload: {
        error: errorMessage
      }
    };

    expect(reducer(undefined, action)).toEqual({
      isLoading: false,
      isAuthorizationRequired: true,
      errorMessage
    });
  });
});
