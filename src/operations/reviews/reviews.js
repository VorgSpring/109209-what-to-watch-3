import {
  loadReviewsRequest,
  loadReviewsSuccess,
  loadReviewsError
} from '../../actions/reviews/reviews';
import {getLinkForReview} from '../../helpers/get-links/get-links';

export const loadReviews = (filmId) => (dispatch, _getState, api) => {
  dispatch(loadReviewsRequest());

  return api.get(getLinkForReview(filmId))
    .then((response) => {
      const reviews = response.data;
      dispatch(loadReviewsSuccess({filmId, reviews}));
    })
    .catch((e) => {
      const {error} = e.response.data;
      dispatch(loadReviewsError({filmId, error}));
    });
};
