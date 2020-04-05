import React from 'react';
import {MoviePLayer} from './movie-player.jsx';
import renderer from 'react-test-renderer';
import {films} from '../../mocks/films';

describe(`MoviePLayer`, () => {
  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <MoviePLayer
          film={films[0]}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
