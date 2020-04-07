import {
  SEND_REVIEW_REQUEST,
  SEND_REVIEW_SUCCESS,
  SEND_REVIEW_ERROR
} from '../../constants/actions-type';

export const sendReviewRequest = () => ({
  type: SEND_REVIEW_REQUEST
});

export const sendReviewSuccess = (body) => ({
  type: SEND_REVIEW_SUCCESS,
  payload: body
});

export const sendReviewError = (error) => ({
  type: SEND_REVIEW_ERROR,
  payload: error
});

