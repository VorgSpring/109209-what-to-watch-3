import {
  SEND_REVIEW_REQUEST,
  SEND_REVIEW_SUCCESS,
  SEND_REVIEW_ERROR
} from '../../constants/actions-type';

const initState = {
  isSending: false,
  errorMessage: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case (SEND_REVIEW_REQUEST):
      return Object.assign(
          {}, state, {
            isSending: true,
            errorMessage: null
          }
      );

    case (SEND_REVIEW_SUCCESS):
      return Object.assign(
          {}, state, {
            isSending: false,
            errorMessage: null
          }
      );

    case (SEND_REVIEW_ERROR):
      return Object.assign(
          {}, state, {
            isSending: false,
            errorMessage: action.payload
          }
      );

    default:
      return state;
  }
};
