import React from 'react';
import {MovieDetails} from './movie-details.jsx';
import renderer from 'react-test-renderer';
import {films} from '../../mocks/films';

describe(`MovieDetails`, () => {
  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <MovieDetails
          film={films[0]}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
