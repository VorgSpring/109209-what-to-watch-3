import {connect} from 'react-redux';
import {SmallMovieCards} from '../small-movie-cards/small-movie-cards.jsx';
import {
  getFavoriteFilmListSelector
} from '../../selectors/favorites/favorites';

const mapStateToProps = (state, ownProps) => ({
  films: getFavoriteFilmListSelector(state, ownProps)
});

export const FavoriteMovieList = connect(
    mapStateToProps
)(SmallMovieCards);
