import {createSelector} from 'reselect';
import {
  getFilterGenreSelector,
  getFilterGenreByPropsSelector
} from '../filters/genre';
import {GenreTypes} from '../../constants/genre-type';
import {getPlayedFilmIdSelector} from '../player/player';

export const getFilmsSelector = (state) => state.films.films;
export const getFilmIdSelector = (_, props) => props.match.params.id;
export const getFilmExcludeIdSelector = (_, props) => props && props.excludeId || null;
export const getMaxFilmsCountSelector = (_, props) => props && props.max || null;

export const getFiltratedFilmsSelector = createSelector(
    getFilmsSelector,
    getFilterGenreSelector,
    getFilterGenreByPropsSelector,
    getFilmExcludeIdSelector,
    getMaxFilmsCountSelector,
    (films, genreByState, genreByProps, excludeId, max) => {
      const genreFilter = genreByProps || genreByState;

      if (genreFilter === GenreTypes.ALL) {
        return films;
      }

      const result = films.filter(({genre, id}) => (
        genre === genreFilter && excludeId !== id
      ));

      return max ? result.slice(0, max) : result;
    }
);

export const getFilmByIdSelector = createSelector(
    getFilmsSelector, getFilmIdSelector,
    (films, id) => {
      const parseId = parseInt(id, 10);
      if (isNaN(parseId)) {
        return null;
      }

      return films.find((film) => film.id === parseId);
    }
);

export const getPlayedFilmSelector = createSelector(
    getFilmsSelector, getPlayedFilmIdSelector,
    (films, id) => {
      const parseId = parseInt(id, 10);
      if (isNaN(parseId)) {
        return null;
      }

      return films.find((film) => film.id === parseId);
    }
);
