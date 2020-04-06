import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {MoviePage} from './movie-page.jsx';
import renderer from 'react-test-renderer';

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
    return <footer />;
  }
}));

describe(`MoviePage`, () => {
  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <MoviePage />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
