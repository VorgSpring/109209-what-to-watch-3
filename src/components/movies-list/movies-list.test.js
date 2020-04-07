import React from 'react';
import {MoviesList} from './movies-list.jsx';
import renderer from 'react-test-renderer';
import {films} from '../../mocks/films';

jest.mock(`../small-movie-card/small-movie-card.jsx`, () => ({
  SmallMovieCard() {
    return <small-movie-card />;
  }
}));

describe(`MoviesList`, () => {
  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <MoviesList
          films={films}
          showCount={3}
          onLoadFilms={() => {}}
          onActiveItem={() => {}}
          onSetMoreItemsToShow={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders correctly without films`, () => {
    const tree = renderer.create(
        <MoviesList
          showCount={3}
          onLoadFilms={() => {}}
          onActiveItem={() => {}}
          onSetMoreItemsToShow={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders correctly without show more button`, () => {
    const tree = renderer.create(
        <MoviesList
          films={films}
          showCount={13}
          onLoadFilms={() => {}}
          onActiveItem={() => {}}
          onSetMoreItemsToShow={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
