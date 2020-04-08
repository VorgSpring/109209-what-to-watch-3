import {createSelector} from 'reselect';
import {
  getFilterGenreSelector
} from '../filters/filters';
import {
  MAX_COUNT_SIMILAR_FILMS,
  ALL_GENRES_TYPE
} from '../../constants/films';

export const getFilmsLoadedStatusSelector = (state) =>
  state.films && state.films.isLoaded || false;

export const getFilmsSelector = (state) =>
  state.films && state.films.films || [];

export const getFilmIdSelector = (_, props) => {
  const id = parseInt(
      props && props.match && props.match.params && props.match.params.id, 10
  );

  return isNaN(id) ? null : id;
};

export const getFiltratedFilmsSelector = createSelector(
    getFilmsSelector,
    getFilterGenreSelector,
    (films, filter) => {
      if (filter === ALL_GENRES_TYPE) {
        return films;
      }

      return films.filter(({genre}) => (
        genre === filter
      ));
    }
);

export const getFilmByIdSelector = createSelector(
    getFilmsSelector,
    getFilmIdSelector,
    (films, id) => {
      if (!films || !id) {
        return null;
      }

      return films.find((film) => film.id === id);
    }
);

export const getSimilarFilmsSelector = createSelector(
    getFilmsSelector,
    getFilmByIdSelector,
    (films, film) => {
      if (!film) {
        return [];
      }

      return films.filter(({genre, id}) => (
        genre === film.genre && id !== film.id
      )).slice(0, MAX_COUNT_SIMILAR_FILMS);
    }
);
