import reducer from './user';
import {AUTHENTICATED_USER} from '../../constants/actions-type';
import {user} from '../../mocks/user';

describe(`reducer user`, () => {
  it(`should return the initial state`, () => {
    expect(reducer(undefined, {})).toBe(null);
  });

  it(`should handle AUTHENTICATED_USER`, () => {
    const action = {
      type: AUTHENTICATED_USER,
      payload: user
    };

    expect(reducer(undefined, action)).toEqual(user);
  });
});
