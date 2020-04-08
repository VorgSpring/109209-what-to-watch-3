import {createSelector} from 'reselect';
import {
  getFilmsSelector
} from '../films/films';
import {ALL_GENRES_TYPE} from '../../constants/films';

export const getGenreTypesSelector = createSelector(
    getFilmsSelector, (films) => {
      return films.reduce((acc, {genre}) => {
        if (acc.some((item) => item === genre)) {
          return acc;
        }
        return acc.concat(genre);
      }, [ALL_GENRES_TYPE]);
    }
);

