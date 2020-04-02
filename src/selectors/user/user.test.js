import {getUserSelector} from './user';
import {state} from '../../mocks/state';

describe(`user selector`, () => {
  it(`should get user`, () => {
    expect(getUserSelector(state)).toEqual({
      id: 1,
      email: `Oliver.conner@gmail.com`,
      name: `Oliver.conner`,
      avatarUrl: `img/1.png`
    });
  });
});
