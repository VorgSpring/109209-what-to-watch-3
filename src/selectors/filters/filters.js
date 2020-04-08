import {ALL_GENRES_TYPE} from '../../constants/films';

export const getFilterGenreSelector = (state) =>
  state.filters && state.filters.genre || ALL_GENRES_TYPE;
