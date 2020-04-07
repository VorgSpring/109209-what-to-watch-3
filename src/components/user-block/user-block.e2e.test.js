import React from 'react';
import {shallow} from 'enzyme';
import {UserBlock} from './user-block.jsx';

describe(`UserBlock`, () => {
  it(`should load user after render, when user empty`, () => {
    const getUserHandler = jest.fn();

    shallow(<UserBlock
      getUser={getUserHandler}
    />);

    expect(getUserHandler).toHaveBeenCalledWith();
  });

  it(`should not load user after render, when user not empty`, () => {
    const getUserHandler = jest.fn();
    const user = {
      avatar: `blah-blah`
    };

    shallow(<UserBlock
      user={user}
      getUser={getUserHandler}
    />);

    expect(getUserHandler).not.toHaveBeenCalledWith();
  });
});
