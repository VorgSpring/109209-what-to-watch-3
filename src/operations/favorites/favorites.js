import {
  changeFavoritesRequest,
  changeFavoritesSuccess,
  changeFavoritesError
} from '../../actions/favorites/favorites';
import {ApiPaths} from '../../constants/api';
import {preparedFilmData} from '../../helpers/prepared-films-data/prepared-films-data';

export const sendChangeFavoriteList = (body) => (dispatch, _getState, api) => {
  dispatch(changeFavoritesRequest());

  return api.post(ApiPaths.setFavorite(body))
  .then((response) => {
    const film = preparedFilmData(response.data);
    dispatch(changeFavoritesSuccess(film));
  })
  .catch((e) => {
    const {error} = e.response.data;
    dispatch(changeFavoritesError(error));
  });
};
