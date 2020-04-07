import React from 'react';
import {shallow} from 'enzyme';
import {MoviePage} from './movie-page.jsx';
import {films} from '../../mocks/films';

describe(`UserBlock`, () => {
  it(`should load films after render, when film empty`, () => {
    const onLoadFilmsHandler = jest.fn();

    shallow(<MoviePage
      onLoadFilms={onLoadFilmsHandler}
    />);

    expect(onLoadFilmsHandler).toHaveBeenCalledWith();
  });

  it(`should not load user after render, when user not empty`, () => {
    const onLoadFilmsHandler = jest.fn();

    shallow(<MoviePage
      film={films[0]}
      onLoadFilms={onLoadFilmsHandler}
    />);

    expect(onLoadFilmsHandler).not.toHaveBeenCalledWith();
  });
});
