import React from 'react';
import {shallow} from 'enzyme';
import {PromoMovieCardComponent} from './promo-movie-card.jsx';
import {films} from '../../mocks/films';

describe(`PromoMovieCard`, () => {
  it(`should load film after render`, () => {
    const loadFilmHandler = jest.fn();

    shallow(<PromoMovieCardComponent
      onLoadFilm={loadFilmHandler}
    />);

    expect(loadFilmHandler).toHaveBeenCalledWith();
  });

  it(`should not load film after render, when film not empty`, () => {
    const loadFilmHandler = jest.fn();

    shallow(<PromoMovieCardComponent
      film={films[0]}
      onLoadFilm={loadFilmHandler}
    />);

    expect(loadFilmHandler).not.toHaveBeenCalledWith();
  });
});
