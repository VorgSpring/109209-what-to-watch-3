import {
  getPromoMovieSelector,
  getErrorStatusPromoMovieSelector,
  getLoadingStatusPromoMovieSelector
} from './promo-movie';
import {state} from '../../mocks/state';
import {films} from '../../mocks/films';

describe(`promo-movie selector`, () => {
  it(`should get promo movie`, () => {
    expect(getPromoMovieSelector(state)).toEqual(films[0]);
  });
  it(`should get error status`, () => {
    expect(getErrorStatusPromoMovieSelector(state)).toBe(false);
  });
  it(`should get loading status`, () => {
    expect(getLoadingStatusPromoMovieSelector(state)).toBe(false);
  });
});
