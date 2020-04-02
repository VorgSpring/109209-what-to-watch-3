import {CHANGE_GENRE} from '../../constants/actions-type';

export const changeGenre = (genre) => ({
  type: CHANGE_GENRE,
  payload: {genre}
});
