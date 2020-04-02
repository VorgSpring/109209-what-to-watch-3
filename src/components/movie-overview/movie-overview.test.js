import React from 'react';
import {MovieOverview} from './movie-overview.jsx';
import renderer from 'react-test-renderer';
import {films} from '../../mocks/films';

describe(`MovieOverview`, () => {
  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <MovieOverview
          film={films[0]}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
