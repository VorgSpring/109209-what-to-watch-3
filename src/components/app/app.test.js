import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {App} from './app.jsx';
import renderer from 'react-test-renderer';
import {RoutePaths} from '../../constants/route-paths.js';

jest.mock(`../main-page/main-page.jsx`, () => ({
  MainPage() {
    return <main-page />;
  }
}));

jest.mock(`../sign-in-page/sign-in-page.jsx`, () => ({
  SingInPageContainer() {
    return <sing-in-page />;
  }
}));

jest.mock(`../movie-page/movie-page.jsx`, () => ({
  MoviePageContainer() {
    return <movie-page />;
  }
}));

jest.mock(`../movie-player/movie-player.jsx`, () => ({
  MoviePlayerContainer() {
    return <movie-player />;
  }
}));

describe(`App`, () => {
  it(`should renders main-page`, () => {
    const tree = renderer.create(
        <MemoryRouter initialEntries={[RoutePaths.MAIN]}>
          <App />
        </MemoryRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders movie-page`, () => {
    const tree = renderer.create(
        <MemoryRouter initialEntries={[RoutePaths.FILM]}>
          <App />
        </MemoryRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders sing-in-page`, () => {
    const tree = renderer.create(
        <MemoryRouter initialEntries={[RoutePaths.SING_IN]}>
          <App />
        </MemoryRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
