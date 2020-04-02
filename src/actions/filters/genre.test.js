import {changeGenre} from './genre';
import {GenreTypes} from '../../constants/genre-type';
import {CHANGE_GENRE} from '../../constants/actions-type';

describe(`genre actions`, () => {
  it(`should correct return action with type CHANGE_GENRE`, () => {
    expect(changeGenre(GenreTypes.CRIME)).toEqual({
      type: CHANGE_GENRE,
      payload: {
        genre: GenreTypes.CRIME
      }
    });
  });
});
