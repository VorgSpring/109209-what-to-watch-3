import React from 'react';
import {MovieInfo} from './movie-info.jsx';
import renderer from 'react-test-renderer';

describe(`MovieInfo`, () => {
  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <MovieInfo />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
