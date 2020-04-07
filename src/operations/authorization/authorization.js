import {
  authorizationRequest,
  authorizationSuccess,
  authorizationError
} from '../../actions/authorization/authorization';
import {authenticatedUser} from '../../actions/user/user';
import {ApiPaths} from '../../constants/api';
import {
  preparedUserData
} from '../../helpers/prepared-user-data/prepared-user-data';

export const sendAuthorizationData = (body) => (dispatch, _getState, api) => {
  dispatch(authorizationRequest());

  return api.post(ApiPaths.LOGIN, body)
    .then((response) => {
      dispatch(authorizationSuccess());
      const user = preparedUserData(response.data);
      dispatch(authenticatedUser(user));
    })
    .catch((e) => {
      const {error} = e.response.data;
      dispatch(authorizationError(error));
    });
};

export const getAuthorizationData = () => (dispatch, _getState, api) => {
  dispatch(authorizationRequest());

  return api.get(ApiPaths.LOGIN)
    .then((response) => {
      dispatch(authorizationSuccess());
      const user = preparedUserData(response.data);
      dispatch(authenticatedUser(user));
    })
    .catch((e) => {
      const {error} = e.response.data;
      dispatch(authorizationError(error));
    });
};
