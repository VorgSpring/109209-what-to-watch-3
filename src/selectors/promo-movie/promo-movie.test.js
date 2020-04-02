import {
  getPromoMovieSelector,
  getErrorPromoMovieSelector,
  isLoadingPromoMovieSelector
} from './promo-movie';
import {state} from '../../mocks/state';
import {films} from '../../mocks/films';

describe(`promo-movie selector`, () => {
  it(`should get promo movie`, () => {
    expect(getPromoMovieSelector(state)).toEqual(films[0]);
  });
  it(`should get error message`, () => {
    expect(getErrorPromoMovieSelector(state)).toBe(false);
  });
  it(`should get isLoading status`, () => {
    expect(isLoadingPromoMovieSelector(state)).toBe(false);
  });
});
