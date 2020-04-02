import {getFilmsSelector, getFiltratedFilmsSelector} from './films';
import {GenreTypes} from '../../constants/genre-type';
import {state} from '../../mocks/state';
import {films} from '../../mocks/films';

describe(`films selector`, () => {
  it(`should get films`, () => {
    expect(getFilmsSelector(state)).toEqual(films);
  });

  it(`should get filtrated films`, () => {
    const newState = Object.assign({}, state, {filters: {genre: GenreTypes.DRAMS}});

    const filtratedFilms = getFiltratedFilmsSelector(newState);

    filtratedFilms.forEach((film) => {
      expect(film).toHaveProperty(`genre`, GenreTypes.DRAMS);
    });
  });

  it(`should get filtrated films when have a genre in props`, () => {
    const props = {
      genre: GenreTypes.HORROR
    };

    const filtratedFilms = getFiltratedFilmsSelector(state, props);

    filtratedFilms.forEach((film) => {
      expect(film).toHaveProperty(`genre`, GenreTypes.HORROR);
    });
  });
});
