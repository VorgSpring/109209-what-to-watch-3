import reducer from './review';
import {
  SEND_REVIEW_REQUEST,
  SEND_REVIEW_SUCCESS,
  SEND_REVIEW_ERROR
} from '../../constants/actions-type';

describe(`reducer reviews`, () => {
  it(`should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      isSending: false,
      errorMessage: null
    });
  });

  it(`should handle SEND_REVIEW_REQUEST`, () => {
    const action = {
      type: SEND_REVIEW_REQUEST
    };

    expect(reducer(undefined, action)).toEqual({
      isSending: true,
      errorMessage: null
    });
  });

  it(`should handle SEND_REVIEW_SUCCESS`, () => {
    const action = {
      type: SEND_REVIEW_SUCCESS
    };

    expect(reducer(undefined, action)).toEqual({
      isSending: false,
      errorMessage: null
    });
  });

  it(`should handle SEND_REVIEW_ERROR`, () => {
    const action = {
      type: SEND_REVIEW_ERROR,
      payload: `blah`
    };

    expect(reducer(undefined, action)).toEqual({
      isSending: false,
      errorMessage: `blah`
    });
  });
});
