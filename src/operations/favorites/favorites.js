import {
  changeFavoritesRequest,
  changeFavoritesSuccess,
  changeFavoritesError,
  addFavoriteFilm,
  removeFavoriteFilm,
  loadFavoriteFilmsRequest,
  loadFavoriteFilmsSuccess,
  loadFavoriteFilmsError
} from '../../actions/favorites/favorites';
import {getLinkChangeFavoriteStatus} from '../../helpers/get-links/get-links';
import {
  preparedFilmData,
  preparedFilmsData
} from '../../helpers/prepared-films-data/prepared-films-data';
import {ApiPaths} from '../../constants/api';

export const sendChangeFavoriteList = (body) => (dispatch, _getState, api) => {
  const {status} = body;
  dispatch(changeFavoritesRequest());

  return api.post(getLinkChangeFavoriteStatus(body))
  .then((response) => {
    const film = preparedFilmData(response.data);
    const {id} = film;
    const action = status ? addFavoriteFilm(film) : removeFavoriteFilm(id);
    dispatch(changeFavoritesSuccess(film));
    dispatch(action);
  })
  .catch((e) => {
    const {error} = e.response.data;
    dispatch(changeFavoritesError(error));
  });
};

export const loadFavoriteList = () => (dispatch, _getState, api) => {
  dispatch(loadFavoriteFilmsRequest());

  return api.get(ApiPaths.FAVORITE)
  .then((response) => {
    const films = preparedFilmsData(response.data);
    dispatch(loadFavoriteFilmsSuccess(films));
  })
  .catch((e) => {
    const {error} = e.response.data;
    dispatch(loadFavoriteFilmsError(error));
  });
};
