import {playMovie, closePlayer} from './player';
import {
  PLAY_MOVIE,
  CLOSE_PLAYER
} from '../../constants/actions-type';

describe(`player actions`, () => {
  it(`should correct return action with type PLAY_MOVIE`, () => {
    expect(playMovie(13)).toEqual({
      type: PLAY_MOVIE,
      payload: 13
    });
  });

  it(`should correct return action with type CLOSE_PLAYER`, () => {
    expect(closePlayer()).toEqual({
      type: CLOSE_PLAYER
    });
  });
});
