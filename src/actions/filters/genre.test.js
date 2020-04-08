import {changeGenre} from './genre';
import {CHANGE_GENRE} from '../../constants/actions-type';

describe(`genre actions`, () => {
  it(`should correct return action with type CHANGE_GENRE`, () => {
    expect(changeGenre(`blah`)).toEqual({
      type: CHANGE_GENRE,
      payload: {
        genre: `blah`
      }
    });
  });
});
