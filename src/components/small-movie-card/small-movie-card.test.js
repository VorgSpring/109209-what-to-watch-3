import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {SmallMovieCard} from './small-movie-card.jsx';
import renderer from 'react-test-renderer';
import {films} from '../../mocks/films';

describe(`SmallMovieCard`, () => {
  it(`should renders correctly`, () => {
    const film = films[0];

    const tree = renderer.create(
        <BrowserRouter>
          <SmallMovieCard
            film={film}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
