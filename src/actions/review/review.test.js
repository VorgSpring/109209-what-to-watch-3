import {
  sendReviewRequest,
  sendReviewSuccess,
  sendReviewError
} from './review';
import {
  SEND_REVIEW_REQUEST,
  SEND_REVIEW_SUCCESS,
  SEND_REVIEW_ERROR
} from '../../constants/actions-type';

describe(`review actions`, () => {
  it(`should correct return action with type SEND_REVIEW_REQUEST`, () => {
    expect(sendReviewRequest()).toEqual({
      type: SEND_REVIEW_REQUEST
    });
  });

  it(`should correct return action with type SEND_REVIEW_SUCCESS`, () => {
    const film = {};

    expect(sendReviewSuccess(film)).toEqual({
      type: SEND_REVIEW_SUCCESS,
      payload: film
    });
  });

  it(`should correct return action with type SEND_REVIEW_ERROR`, () => {
    const error = `error`;

    expect(sendReviewError(error)).toEqual({
      type: SEND_REVIEW_ERROR,
      payload: error
    });
  });
});
