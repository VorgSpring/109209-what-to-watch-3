import {CHANGE_GENRE} from '../../constants/actions-type';
import {ALL_GENRES_TYPE} from '../../constants/films';

const initFilters = {
  genre: ALL_GENRES_TYPE
};

export default (filters = initFilters, action) => {
  switch (action.type) {
    case (CHANGE_GENRE):
      return Object.assign({}, filters, {genre: action.payload.genre});

    default:
      return filters;
  }
};
