import reducer, {initialState} from './player';
import {
  PLAY_MOVIE,
  CLOSE_PLAYER
} from '../../constants/actions-type';

describe(`reducer player`, () => {
  it(`should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`should handle PLAY_MOVIE`, () => {
    const action = {
      type: PLAY_MOVIE,
      payload: 13
    };

    expect(reducer(undefined, action)).toEqual({
      isShow: true,
      filmId: 13
    });
  });

  it(`should handle CLOSE_PLAYER`, () => {
    const action = {
      type: CLOSE_PLAYER
    };

    expect(reducer(undefined, action)).toEqual({
      isShow: false,
      filmId: null
    });
  });
});
