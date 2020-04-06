import {
  PLAY_MOVIE,
  CLOSE_PLAYER
} from '../../constants/actions-type';

export const playMovie = (id) => ({
  type: PLAY_MOVIE,
  payload: id
});

export const closePlayer = () => ({
  type: CLOSE_PLAYER
});
