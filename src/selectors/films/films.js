import {createSelector} from 'reselect';
import {getFilterGenreSelector} from '../filters/genre';
import {GenreTypes} from '../../constants/genre-type';

export const getFilmsSelector = (state) => state.films.films;
export const getFilmIdSelector = (_, props) => props.match.params.id;

export const getFiltratedFilmsSelector = createSelector(
    getFilmsSelector, getFilterGenreSelector,
    (films, genre) => {
      if (genre === GenreTypes.ALL) {
        return films;
      }

      return films.filter((film) => (
        film.genre === genre
      ));
    }
);

export const makeFilmByIdSelector = () => (
  createSelector(
      getFilmsSelector, getFilmIdSelector,
      (films, id) => {
        const parseId = parseInt(id, 10);
        if (isNaN(parseId)) {
          return null;
        }

        return films.find((film) => film.id === parseId);
      }
  )
);
