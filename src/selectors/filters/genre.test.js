import {getFilterGenreSelector} from './genre';
import {GenreTypes} from '../../constants/genre-type';
import {state} from '../../mocks/state';

describe(`genre selector`, () => {
  it(`should get genre filter`, () => {
    expect(getFilterGenreSelector(state)).toEqual(GenreTypes.ALL);
  });
});
