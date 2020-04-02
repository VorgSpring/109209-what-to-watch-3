import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {loadReviews} from './reviews';
import {
  LOAD_REVIEWS_REQUEST,
  LOAD_REVIEWS_ERROR,
  LOAD_REVIEWS_SUCCESS
} from '../../constants/actions-type';
import {ApiPaths} from '../../constants/api';
import {review} from '../../mocks/review';


describe(`promo-movie operation`, () => {
  it(`should make a correct API call to /films/promo`, function () {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const filmId = 1;
    const reviewsLoader = loadReviews(filmId);

    apiMock
      .onGet(ApiPaths.getReviews(filmId))
      .reply(200, review);

    return reviewsLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: LOAD_REVIEWS_REQUEST
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: LOAD_REVIEWS_SUCCESS,
          payload: {
            filmId, review
          },
        });
      });
  });

  it(`should make a correct errors API call to /films/promo`, function () {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const filmId = 1;
    const reviewsLoader = loadReviews(filmId);
    const errorMessage = `error`;

    apiMock
      .onGet(ApiPaths.getReviews(filmId))
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
