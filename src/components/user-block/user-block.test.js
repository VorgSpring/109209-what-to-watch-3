import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {UserBlock} from './user-block.jsx';
import renderer from 'react-test-renderer';
import {user} from '../../mocks/user';

describe(`UserBlock`, () => {
  it(`should renders correctly with user`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <UserBlock
            user={user}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders correctly without user`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <UserBlock />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
