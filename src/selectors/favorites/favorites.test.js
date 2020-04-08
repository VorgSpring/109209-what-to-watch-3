import {
  getFavoriteFilmListSelector,
  getFavoriteLoadedStatusSelector
} from './favorites';
import {state} from '../../mocks/state';
import {films} from '../../mocks/films';

describe(`favorites selector`, () => {
  it(`should get favorite film list by state`, () => {
    expect(getFavoriteFilmListSelector(state)).toEqual(films);
  });

  it(`should get favorite film load status`, () => {
    expect(getFavoriteLoadedStatusSelector(state)).toBe(true);
  });
});
