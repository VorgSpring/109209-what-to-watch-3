import {
  getFilmsSelector,
  getFiltratedFilmsSelector,
  getFilmByIdSelector
} from './films';
import {state} from '../../mocks/state';
import {films} from '../../mocks/films';

describe(`films selector`, () => {
  it(`should get films`, () => {
    expect(getFilmsSelector(state)).toEqual(films);
  });

  it(`should get filtrated films`, () => {
    const newState = Object.assign(
        {}, state, {
          filters: {
            genre: `Crime`
          }
        });

    const filtratedFilms = getFiltratedFilmsSelector(newState);

    filtratedFilms.forEach((film) => {
      expect(film).toHaveProperty(`genre`, `Crime`);
    });
  });

  it(`should get get film by id selector`, () => {
    const props = {
      match: {
        params: {
          id: 1
        }
      }
    };

    const film = getFilmByIdSelector(state, props);

    expect(film).toEqual(films[0]);
  });
});
