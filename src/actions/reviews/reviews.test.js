import {
  loadReviewsRequest,
  loadReviewsSuccess,
  loadReviewsError
} from './reviews';
import {
  LOAD_REVIEWS_REQUEST,
  LOAD_REVIEWS_SUCCESS,
  LOAD_REVIEWS_ERROR
} from '../../constants/actions-type';

describe(`reviews actions`, () => {
  it(`should correct return action with type LOAD_REVIEWS_REQUEST`, () => {
    expect(loadReviewsRequest()).toEqual({
      type: LOAD_REVIEWS_REQUEST
    });
  });

  it(`should correct return action with type LOAD_REVIEWS_SUCCESS`, () => {
    const film = {};

    expect(loadReviewsSuccess(film)).toEqual({
      type: LOAD_REVIEWS_SUCCESS,
      payload: film
    });
  });

  it(`should correct return action with type LOAD_REVIEWS_ERROR`, () => {
    const error = `error`;

    expect(loadReviewsError(error)).toEqual({
      type: LOAD_REVIEWS_ERROR,
      payload: error
    });
  });
});
