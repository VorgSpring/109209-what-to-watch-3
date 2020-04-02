import {
  CHANGE_FAVORITES_REQUEST,
  CHANGE_FAVORITES_SUCCESS,
  CHANGE_FAVORITES_ERROR
} from '../../constants/actions-type';

const initState = {
  isLoading: false,
  isError: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case (CHANGE_FAVORITES_REQUEST):
      return Object.assign(
          {}, state, {
            isLoading: true,
            isError: false
          }
      );

    case (CHANGE_FAVORITES_SUCCESS):
      return Object.assign(
          {}, state, {
            isLoading: false
          }
      );

    case (CHANGE_FAVORITES_ERROR):
      return Object.assign(
          {}, state, {
            isLoading: false,
            isError: true
          }
      );
    default:
      return state;
  }
};
