import {getReviewsByFilmIdSelector} from './reviews';
import {state} from '../../mocks/state';

describe(`reviews selector`, () => {
  it(`should get user`, () => {
    const props = {
      match: {
        params: {
          id: 1
        }
      }
    };

    expect(getReviewsByFilmIdSelector(state, props)).toEqual({
      even: [{
        id: 1,
        user: {
          id: 4,
          name: `Kate Muir`,
        },
        rating: 8.9,
        comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `2019-05-08T14:13:56.569Z`
      }],
      odd: []
    });
  });
});
