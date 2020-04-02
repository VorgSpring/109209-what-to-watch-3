import React from 'react';
import {MoviePoster} from './movie-poster.jsx';
import renderer from 'react-test-renderer';

describe(`MoviePoster`, () => {
  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <MoviePoster />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
