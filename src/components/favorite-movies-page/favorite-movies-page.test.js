import React from 'react';
import {FavoriteMoviesPageComponent} from './favorite-movies-page.jsx';
import renderer from 'react-test-renderer';

jest.mock(`../header/header.jsx`, () => ({
  Header() {
    return <main-header />;
  }
}));

jest.mock(`../favorite-movies-list/favorite-movies-list.jsx`, () => ({
  FavoriteMovieList() {
    return <favorite-movies-list />;
  }
}));

jest.mock(`../footer/footer.jsx`, () => ({
  Footer() {
    return <main-footer />;
  }
}));

describe(`FavoriteMoviesPage`, () => {
  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <FavoriteMoviesPageComponent
          isLoaded={true}
          onLoadFavoriteFilms={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
