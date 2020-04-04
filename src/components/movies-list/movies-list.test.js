import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {MoviesList} from './movies-list.jsx';
import renderer from 'react-test-renderer';
import {films} from '../../mocks/films';

describe(`MoviesList`, () => {
  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <MoviesList
            films={films}
            showCount={8}
            onLoadFilms={() => {}}
            onActiveItem={() => {}}
            onSetMoreItemsToShow={() => {}}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
