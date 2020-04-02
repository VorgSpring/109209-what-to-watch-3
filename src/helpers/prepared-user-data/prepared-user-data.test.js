/* eslint-disable camelcase */
import {preparedUserData} from './prepared-user-data';

describe(`preparedUserData`, () => {
  it(`should correct prepared user data`, () => {
    const user = {
      id: 1,
      email: `Oliver.conner@gmail.com`,
      name: `Oliver.conner`,
      avatar_url: `img/1.png`
    };

    const correctPreparedUser = {
      id: 1,
      email: `Oliver.conner@gmail.com`,
      name: `Oliver.conner`,
      avatarUrl: `img/1.png`
    };

    const preparedUser = preparedUserData(user);

    expect(preparedUser).toEqual(correctPreparedUser);
  });
});
