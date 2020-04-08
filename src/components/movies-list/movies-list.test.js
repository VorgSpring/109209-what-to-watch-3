import React from 'react';
import {MoviesListComponent} from './movies-list.jsx';
import renderer from 'react-test-renderer';
import {films} from '../../mocks/films';

jest.mock(`../small-movie-cards/small-movie-cards.jsx`, () => ({
  SmallMovieCards() {
    return <small-movie-cards />;
  }
}));

describe(`MoviesList`, () => {
  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <MoviesListComponent
          filmToShown={films}
          isHaveMoreItems
          onSetMoreItemsToShow={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders correctly without show more button`, () => {
    const tree = renderer.create(
        <MoviesListComponent
          filmToShown={films}
          isHaveMoreItems={false}
          onSetMoreItemsToShow={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
