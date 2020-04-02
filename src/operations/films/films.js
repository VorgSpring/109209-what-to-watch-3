import {
  loadFilmsRequest,
  loadFilmsSuccess,
  loadFilmsError
} from '../../actions/films/films';
import {ApiPaths} from '../../constants/api';
import {preparedFilmsData} from '../../helpers/prepared-films-data/prepared-films-data';

export const loadFilms = () => (dispatch, _getState, api) => {
  dispatch(loadFilmsRequest());

  return api.get(ApiPaths.FILMS)
    .then((response) => {
      const films = preparedFilmsData(response.data);
      dispatch(loadFilmsSuccess(films));
    })
    .catch((e) => {
      const {error} = e.response.data;
      dispatch(loadFilmsError({error}));
    });
};
