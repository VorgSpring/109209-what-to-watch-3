import {AUTHENTICATED_USER} from '../../constants/actions-type';

export const authenticatedUser = (user) => ({
  type: AUTHENTICATED_USER,
  payload: user
});
