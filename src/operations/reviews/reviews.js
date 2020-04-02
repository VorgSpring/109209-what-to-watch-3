import {
  loadReviewsRequest,
  loadReviewsSuccess,
  loadReviewsError
} from '../../actions/reviews/reviews';
import {ApiPaths} from '../../constants/api';

export const loadReviews = (filmId) => (dispatch, _getState, api) => {
  dispatch(loadReviewsRequest());

  return api.get(ApiPaths.getReviews(filmId))
    .then((response) => {
      const review = response.data;
      dispatch(loadReviewsSuccess({filmId, review}));
    })
    .catch((e) => {
      const {error} = e.response.data;
      dispatch(loadReviewsError({filmId, error}));
    });
};
