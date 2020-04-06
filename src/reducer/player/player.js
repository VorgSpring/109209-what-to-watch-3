import {
  PLAY_MOVIE,
  CLOSE_PLAYER
} from '../../constants/actions-type';

const initialState = {
  isShow: false,
  filmId: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case (PLAY_MOVIE):
      return Object.assign(
          {}, state, {
            filmId: action.payload,
            isShow: true
          }
      );

    case (CLOSE_PLAYER):
      return Object.assign(
          {}, state, {
            filmId: null,
            isShow: false
          }
      );
    default:
      return state;
  }
};
