import {
  loadPromoMovieRequest,
  loadPromoMovieSuccess,
  loadPromoMovieError
} from '../../actions/promo-movie/promo-movie';
import {ApiPaths} from '../../constants/api';
import {
  preparedFilmData
} from '../../helpers/prepared-films-data/prepared-films-data';

export const loadPromoMovie = () => (dispatch, _getState, api) => {
  dispatch(loadPromoMovieRequest());

  return api.get(ApiPaths.PROMO_MOVIE)
    .then((response) => {
      const film = preparedFilmData(response.data);
      dispatch(loadPromoMovieSuccess(film));
    })
    .catch((e) => {
      const {error} = e.response.data;
      dispatch(loadPromoMovieError({error}));
    });
};
