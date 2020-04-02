import React from 'react';
import {shallow} from 'enzyme';
import {PromoMovieCard} from './promo-movie-card.jsx';
import {films} from '../../mocks/films';

describe(`PromoMovieCard`, () => {
  it(`should load film after render`, () => {
    const film = films[0];
    const loadFilmHandler = jest.fn();

    shallow(<PromoMovieCard
      film={film}
      onLoadFilm={loadFilmHandler}
    />);

    expect(loadFilmHandler).toHaveBeenCalledWith();
  });
});
