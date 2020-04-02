import reducer from './filters';
import {GenreTypes} from '../../constants/genre-type';
import {CHANGE_GENRE} from '../../constants/actions-type';

describe(`reducer filters`, () => {
  it(`should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      genre: GenreTypes.ALL
    });
  });

  it(`should handle CHANGE_GENRE`, () => {
    const action = {
      type: CHANGE_GENRE,
      payload: {
        genre: GenreTypes.COMEDIES
      }
    };

    expect(reducer(undefined, action)).toEqual({
      genre: GenreTypes.COMEDIES
    });
  });
});
