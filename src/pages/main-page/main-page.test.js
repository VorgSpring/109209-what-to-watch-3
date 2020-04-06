import React from 'react';
import {MainPage} from './main-page.jsx';
import renderer from 'react-test-renderer';

jest.mock(`../../components/movies-list/movies-list.jsx`, () => ({
  MoviesListContainer() {
    return <movie-list />;
  }
}));

jest.mock(`../../components/genre-list/genre-list.jsx`, () => ({
  GenreListWrapper() {
    return <genre-list />;
  }
}));

jest.mock(`../../components/promo-movie-card/promo-movie-card.jsx`, () => ({
  PromoMovieContainer() {
    return <promo-movie />;
  }
}));

describe(`MainPage`, () => {
  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <MainPage />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
