import React from 'react';
import {PromoMovieCardComponent} from './promo-movie-card.jsx';
import renderer from 'react-test-renderer';
import {films} from '../../mocks/films';

jest.mock(`../movie-wrapper/movie-wrapper.jsx`, () => ({
  MovieWrapper() {
    return <movie-wrapper />;
  }
}));

jest.mock(`../movie-info/movie-info.jsx`, () => ({
  MovieInfo() {
    return <movie-info />;
  }
}));

jest.mock(`../movie-poster/movie-poster.jsx`, () => ({
  MoviePoster() {
    return <movie-poster />;
  }
}));

jest.mock(`../movie-buttons/movie-buttons.jsx`, () => ({
  MovieButtons() {
    return <movie-review />;
  }
}));

describe(`PromoMovieCard`, () => {
  const loadFilmHandler = () => {};

  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <PromoMovieCardComponent
          film={films[0]}
          onLoadFilm={loadFilmHandler}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders correctly without film`, () => {
    const tree = renderer.create(
        <PromoMovieCardComponent
          onLoadFilm={loadFilmHandler}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
