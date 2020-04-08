import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {MovieButtonsComponent} from './movie-buttons.jsx';
import renderer from 'react-test-renderer';

describe(`MoviePoster`, () => {
  const history = {
    push: () => {}
  };

  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <MovieButtonsComponent
            filmId={1}
            isFavorite={false}
            isAuthorizationRequired
            history={history}
            onChangeFavoritesList={() => {}}
            onPlay={() => {}}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders correctly with favorite icon`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <MovieButtonsComponent
            filmId={1}
            isFavorite
            isAuthorizationRequired={false}
            history={history}
            onChangeFavoritesList={() => {}}
            onPlay={() => {}}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders correctly with link to review`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <MovieButtonsComponent
            filmId={1}
            isFavorite={false}
            isAuthorizationRequired={false}
            isFull
            history={history}
            onChangeFavoritesList={() => {}}
            onPlay={() => {}}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
