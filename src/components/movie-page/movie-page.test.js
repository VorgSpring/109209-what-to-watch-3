import React from 'react';
import {MoviePage} from './movie-page.jsx';
import renderer from 'react-test-renderer';
import {films} from '../../mocks/films';

jest.mock(`../../components/movies-list/movies-list.jsx`, () => ({
  MoviesListContainer() {
    return <movie-list />;
  }
}));

jest.mock(`../../components/movie-card/movie-card.jsx`, () => ({
  MovieCard() {
    return <movie-card />;
  }
}));

jest.mock(`../../components/footer/footer.jsx`, () => ({
  Footer() {
    return <main-footer />;
  }
}));

describe(`MoviePage`, () => {
  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <MoviePage
          film={films[0]}
          onLoadFilms={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders correctly without film`, () => {
    const tree = renderer.create(
        <MoviePage
          onLoadFilms={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
