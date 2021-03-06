import React from 'react';
import {MovieCardComponent} from './movie-card.jsx';
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
    return <movie-buttons />;
  }
}));

jest.mock(`../movie-tabs/movie-tabs.jsx`, () => ({
  MovieTabs() {
    return <movie-tabs />;
  }
}));

describe(`MovieCard`, () => {
  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <MovieCardComponent
          film={films[0]}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
