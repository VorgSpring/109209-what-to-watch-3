import {makeFilmByIdSelector} from '../../selectors/films/films';

export const makeFilmById = () => {
  const getFilmByIdSelector = makeFilmByIdSelector();
  const mapStateToProps = (state, props) => ({
    film: getFilmByIdSelector(state, props)
  });
  return mapStateToProps;
};
