import {
  authorizationRequest,
  authorizationSuccess,
  authorizationError
} from './authorization';
import {
  AUTHORIZATION_REQUEST,
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_ERROR
} from '../../constants/actions-type';

describe(`authorization actions`, () => {
  it(`should correct return action with type AUTHORIZATION_REQUEST`, () => {
    expect(authorizationRequest()).toEqual({
      type: AUTHORIZATION_REQUEST
    });
  });

  it(`should correct return action with type AUTHORIZATION_SUCCESS`, () => {
    expect(authorizationSuccess()).toEqual({
      type: AUTHORIZATION_SUCCESS
    });
  });

  it(`should correct return action with type AUTHORIZATION_ERROR`, () => {
    const errorMessage = `error`;

    expect(authorizationError(errorMessage)).toEqual({
      type: AUTHORIZATION_ERROR,
      payload: {
        error: errorMessage
      }
    });
  });
});
