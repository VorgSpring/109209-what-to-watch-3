import {
  getPlayedFilmIdSelector,
  isShowPlayerSelector
} from './player';
import {state} from '../../mocks/state';

describe(`genre selector`, () => {
  it(`should is show player by state`, () => {
    expect(isShowPlayerSelector(state)).toBe(false);
  });

  it(`should get genre filter by props`, () => {
    const newState = Object.assign(
        {}, state, {
          player: {
            filmId: 13
          }
        });

    expect(getPlayedFilmIdSelector(newState)).toBe(13);
  });
});
