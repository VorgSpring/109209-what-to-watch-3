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
  SingInPage() {
    return <sing-in-page />;
  }
}));

jest.mock(`../movie-page/movie-page.jsx`, () => ({
  MoviePage() {
    return <movie-page />;
  }
}));

jest.mock(`../movie-player/movie-player.jsx`, () => ({
  MoviePlayer() {
    return <movie-player />;
  }
}));

jest.mock(`../add-review-page/add-review-page.jsx`, () => ({
  AddReviewPage() {
    return <add-review-page />;
  }
}));

jest.mock(`../favorite-movies-page/favorite-movies-page.jsx`, () => ({
  FavoriteMoviesPage() {
    return <favorite-movies-page />;
  }
}));

jest.mock(`../private-route/private-route.jsx`, () => ({
  PrivateRoute({render}) {
    return render();
  }
}));

describe(`App`, () => {
  it(`should renders main-page`, () => {
    const tree = renderer.create(
        <MemoryRouter initialEntries={[RoutePaths.MAIN]}>
          <App
            checkAuth={() => {}}
            isLoadedFilms={false}
            isAuthorizationRequired={false}
            onLoadFilms={() => {}}
          />
        </MemoryRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders movie-page`, () => {
    const tree = renderer.create(
        <MemoryRouter initialEntries={[RoutePaths.FILM]}>
          <App
            checkAuth={() => {}}
            isLoadedFilms={false}
            isAuthorizationRequired={false}
            onLoadFilms={() => {}}
          />
        </MemoryRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders sing-in-page`, () => {
    const tree = renderer.create(
        <MemoryRouter initialEntries={[RoutePaths.SING_IN]}>
          <App
            checkAuth={() => {}}
            isLoadedFilms={false}
            isAuthorizationRequired
            onLoadFilms={() => {}}
          />
        </MemoryRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders add-review-page`, () => {
    const tree = renderer.create(
        <MemoryRouter initialEntries={[RoutePaths.REVIEW]}>
          <App
            checkAuth={() => {}}
            isLoadedFilms={false}
            isAuthorizationRequired={false}
            onLoadFilms={() => {}}
          />
        </MemoryRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders favorite-movies-page`, () => {
    const tree = renderer.create(
        <MemoryRouter initialEntries={[RoutePaths.FAVORITE]}>
          <App
            checkAuth={() => {}}
            isLoadedFilms={false}
            isAuthorizationRequired={false}
            onLoadFilms={() => {}}
          />
        </MemoryRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders movie-player`, () => {
    const tree = renderer.create(
        <MemoryRouter initialEntries={[RoutePaths.PLAYER]}>
          <App
            checkAuth={() => {}}
            isLoadedFilms={false}
            isAuthorizationRequired={false}
            onLoadFilms={() => {}}
          />
        </MemoryRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
