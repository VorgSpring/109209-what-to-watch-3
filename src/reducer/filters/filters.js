import {CHANGE_GENRE} from '../../constants/actions-type';
import {GenreTypes} from '../../constants/genre-type';

const initFilters = {
  genre: GenreTypes.ALL
};

export default (filters = initFilters, action) => {
  switch (action.type) {
    case (CHANGE_GENRE):
      return Object.assign({}, filters, {genre: action.payload.genre});

    default:
      return filters;
  }
};
