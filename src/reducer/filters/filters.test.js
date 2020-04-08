import reducer from './filters';
import {ALL_GENRES_TYPE} from '../../constants/films';
import {CHANGE_GENRE} from '../../constants/actions-type';

describe(`reducer filters`, () => {
  it(`should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      genre: ALL_GENRES_TYPE
    });
  });

  it(`should handle CHANGE_GENRE`, () => {
    const action = {
      type: CHANGE_GENRE,
      payload: {
        genre: `blah`
      }
    };

    expect(reducer(undefined, action)).toEqual({
      genre: `blah`
    });
  });
});
