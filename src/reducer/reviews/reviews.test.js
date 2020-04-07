import reducer from './reviews';
import {
  LOAD_REVIEWS_REQUEST,
  LOAD_REVIEWS_SUCCESS,
  LOAD_REVIEWS_ERROR,
  SEND_REVIEW_SUCCESS
} from '../../constants/actions-type';
import {review} from '../../mocks/review';

describe(`reducer reviews`, () => {
  it(`should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      isLoading: false,
      isError: false,
      reviews: null
    });
  });

  it(`should handle LOAD_REVIEWS_REQUEST`, () => {
    const action = {
      type: LOAD_REVIEWS_REQUEST
    };

    expect(reducer(undefined, action)).toEqual({
      isLoading: true,
      isError: false,
      reviews: null
    });
  });

  it(`should handle LOAD_REVIEWS_SUCCESS`, () => {
    const action = {
      type: LOAD_REVIEWS_SUCCESS,
      payload: {
        filmId: 1,
        reviews: [review]
      }
    };

    expect(reducer(undefined, action)).toEqual({
      isLoading: false,
      isError: false,
      reviews: {
        1: [review]
      }
    });
  });

  it(`should handle LOAD_REVIEWS_REQUEST`, () => {
    const action = {
      type: LOAD_REVIEWS_ERROR,
      payload: {
        filmId: 1
      }
    };

    expect(reducer(undefined, action)).toEqual({
      isLoading: false,
      isError: true,
      reviews: {
        1: []
      }
    });
  });

  it(`should handle LOAD_REVIEWS_REQUEST`, () => {
    const action = {
      type: SEND_REVIEW_SUCCESS,
      payload: {
        filmId: 1,
        reviews: [review]
      }
    };

    expect(reducer(undefined, action)).toEqual({
      isLoading: false,
      isError: false,
      reviews: {
        1: [review]
      }
    });
  });
});
