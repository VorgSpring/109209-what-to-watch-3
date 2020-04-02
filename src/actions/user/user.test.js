import {authenticatedUser} from './user';
import {AUTHENTICATED_USER} from '../../constants/actions-type';
import {user} from '../../mocks/user';

describe(`user actions`, () => {
  it(`should correct return action with type AUTHENTICATED_USER`, () => {
    expect(authenticatedUser(user)).toEqual({
      type: AUTHENTICATED_USER,
      payload: user
    });
  });
});
