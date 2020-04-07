import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {loadReviews} from './reviews';
import {
  LOAD_REVIEWS_REQUEST,
  LOAD_REVIEWS_ERROR,
  LOAD_REVIEWS_SUCCESS
} from '../../constants/actions-type';
import {getLinkForReview} from '../../helpers/get-links/get-links';
import {review} from '../../mocks/review';

describe(`reviews operation`, () => {
  it(`should make a correct get reviews`, function () {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const filmId = 1;
    const reviewsLoader = loadReviews(filmId);

    apiMock
      .onGet(getLinkForReview(filmId))
      .reply(200, [review]);

    return reviewsLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: LOAD_REVIEWS_REQUEST
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: LOAD_REVIEWS_SUCCESS,
          payload: {
            filmId, reviews: [review]
          },
        });
      });
  });

  it(`should make a correct errors get reviews`, function () {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const filmId = 1;
    const reviewsLoader = loadReviews(filmId);
    const errorMessage = `error`;

    apiMock
      .onGet(getLinkForReview(filmId))
      .reply(() => Promise.reject({
        response: {
          data: {
            status: 404,
            error: errorMessage
          }
        }
      }));

    return reviewsLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: LOAD_REVIEWS_REQUEST
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: LOAD_REVIEWS_ERROR,
          payload: {
            filmId: 1,
            error: errorMessage
          }
        });
      });
  });
});
