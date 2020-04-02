import {
  AUTHORIZATION_REQUEST,
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_ERROR
} from '../../constants/actions-type';

const initState = {
  isLoading: false,
  isAuthorizationRequired: true,
  errorMessage: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case (AUTHORIZATION_REQUEST):
      return Object.assign(
          {}, state, {
            isLoading: true
          }
      );

    case (AUTHORIZATION_SUCCESS):
      return Object.assign(
          {}, state, {
            isAuthorizationRequired: false,
            isLoading: false
          }
      );

    case (AUTHORIZATION_ERROR):
      return Object.assign(
          {}, state, {
            isAuthorizationRequired: true,
            isLoading: false,
            errorMessage: action.payload.error
          }
      );
    default:
      return state;
  }
};
