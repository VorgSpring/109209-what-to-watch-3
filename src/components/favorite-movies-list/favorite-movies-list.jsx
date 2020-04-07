import {connect} from 'react-redux';
import {MoviesList} from '../movies-list/movies-list.jsx';
import {getFavoriteFilmListSelector} from '../../selectors/favorites/favorites';
import {loadFavoriteList} from '../../operations/favorites/favorites';

const mapStateToProps = (state, ownProps) => ({
  films: getFavoriteFilmListSelector(state, ownProps)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFilms: () => dispatch(loadFavoriteList())
});

export const FavoriteMovieListContainer = connect(
    mapStateToProps, mapDispatchToProps
)(MoviesList);
