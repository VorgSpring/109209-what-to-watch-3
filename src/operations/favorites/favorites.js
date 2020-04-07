import {
  changeFavoritesRequest,
  changeFavoritesSuccess,
  changeFavoritesError
} from '../../actions/favorites/favorites';
import {getLinkChangeFavoriteStatus} from '../../helpers/get-links/get-links';
import {preparedFilmData} from '../../helpers/prepared-films-data/prepared-films-data';

export const sendChangeFavoriteList = (body) => (dispatch, _getState, api) => {
  dispatch(changeFavoritesRequest());

  return api.post(getLinkChangeFavoriteStatus(body))
  .then((response) => {
    const film = preparedFilmData(response.data);
    dispatch(changeFavoritesSuccess(film));
  })
  .catch((e) => {
    const {error} = e.response.data;
    dispatch(changeFavoritesError(error));
  });
};
