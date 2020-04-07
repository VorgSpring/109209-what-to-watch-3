import history from '../../history';
import {
  sendReviewRequest,
  sendReviewSuccess,
  sendReviewError
} from '../../actions/review/review';
import {
  getLinkForReview,
  getFilmPathLink
} from '../../helpers/get-links/get-links';

export const sendReviewData = (filmId, body) => (dispatch, _getState, api) => {
  dispatch(sendReviewRequest());

  return api.post(getLinkForReview(filmId), body)
    .then((response) => {
      const reviews = response.data;
      dispatch(sendReviewSuccess({filmId, reviews}));
      history.push(getFilmPathLink(filmId));
    })
    .catch((e) => {
      const {error} = e.response.data;
      dispatch(sendReviewError(error));
    });
};
