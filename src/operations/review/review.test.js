import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {sendReviewData} from './review';
import {
  SEND_REVIEW_REQUEST,
  SEND_REVIEW_SUCCESS,
  SEND_REVIEW_ERROR
} from '../../constants/actions-type';
import {getLinkForReview} from '../../helpers/get-links/get-links';
import {review} from '../../mocks/review';


describe(`review operation`, () => {
  const reviewData = {
    rating: 3,
    comment: `blah-blah`
  };

  const filmId = 1;

  it(`should make a correct send review`, function () {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const reviewsLoader = sendReviewData(filmId, reviewData);

    apiMock
      .onPost(getLinkForReview(filmId))
      .reply(200, [review]);

    return reviewsLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: SEND_REVIEW_REQUEST
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: SEND_REVIEW_SUCCESS,
          payload: {
            filmId, reviews: [review]
          },
        });
      });
  });

  it(`should make a correct errors send review`, function () {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const reviewsLoader = sendReviewData(filmId, reviewData);
    const errorMessage = `error`;

    apiMock
      .onPost(getLinkForReview(filmId))
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
          type: SEND_REVIEW_REQUEST
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: SEND_REVIEW_ERROR,
          payload: errorMessage
        });
      });
  });
});
