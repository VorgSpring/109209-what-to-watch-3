import {
  AUTHORIZATION_REQUEST,
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_ERROR
} from '../../constants/actions-type';

export const authorizationRequest = () => ({
  type: AUTHORIZATION_REQUEST
});

export const authorizationSuccess = () => ({
  type: AUTHORIZATION_SUCCESS
});

export const authorizationError = (error) => ({
  type: AUTHORIZATION_ERROR,
  payload: {
    error
  }
});
