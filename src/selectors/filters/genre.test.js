import {
  getFilterGenreSelector,
  getFilterGenreByPropsSelector
} from './genre';
import {GenreTypes} from '../../constants/genre-type';
import {state} from '../../mocks/state';

describe(`genre selector`, () => {
  it(`should get genre filter by state`, () => {
    expect(getFilterGenreSelector(state)).toEqual(GenreTypes.ALL);
  });

  it(`should get genre filter by props`, () => {
    const props = {
      genre: GenreTypes.COMEDIES
    };

    expect(getFilterGenreByPropsSelector({}, props)).toEqual(GenreTypes.COMEDIES);
  });
});
