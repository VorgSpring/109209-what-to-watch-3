import React from 'react';
import {SmallMovieCards} from './small-movie-cards.jsx';
import renderer from 'react-test-renderer';
import {films} from '../../mocks/films';

jest.mock(`../small-movie-card/small-movie-card.jsx`, () => ({
  SmallMovieCard() {
    return <small-movie-card />;
  }
}));

describe(`SmallMovieCards`, () => {
  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <SmallMovieCards
          films={films}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
