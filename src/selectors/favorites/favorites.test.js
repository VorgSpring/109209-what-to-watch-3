import {
  getFavoriteFilmListSelector
} from './favorites';
import {state} from '../../mocks/state';
import {films} from '../../mocks/films';

describe(`favorites selector`, () => {
  it(`should get favorite film list by state`, () => {
    expect(getFavoriteFilmListSelector(state)).toEqual(films);
  });
});
