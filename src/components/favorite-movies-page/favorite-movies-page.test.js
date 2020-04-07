import React from 'react';
import {FavoriteMoviesPage} from './favorite-movies-page.jsx';
import renderer from 'react-test-renderer';

jest.mock(`../header/header.jsx`, () => ({
  Header() {
    return <main-header />;
  }
}));

jest.mock(`../favorite-movies-list/favorite-movies-list.jsx`, () => ({
  FavoriteMovieListContainer() {
    return <favorite-movies-list />;
  }
}));

jest.mock(`../footer/footer.jsx`, () => ({
  Footer() {
    return <main-footer />;
  }
}));

describe(`AddReviewPage`, () => {
  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <FavoriteMoviesPage />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
