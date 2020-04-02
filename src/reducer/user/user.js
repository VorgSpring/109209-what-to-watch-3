import {AUTHENTICATED_USER} from '../../constants/actions-type';

export default (state = null, action) => {
  switch (action.type) {
    case (AUTHENTICATED_USER):
      return Object.assign(
          {}, state, action.payload
      );
    default:
      return state;
  }
};
