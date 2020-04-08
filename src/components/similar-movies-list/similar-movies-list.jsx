import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {SmallMovieCards} from '../small-movie-cards/small-movie-cards.jsx';
import {getSimilarFilmsSelector} from '../../selectors/films/films';

const mapStateToProps = (state, ownProps) => ({
  films: getSimilarFilmsSelector(state, ownProps)
});

const SimilarMoviesListContainer = connect(
    mapStateToProps
)(SmallMovieCards);

export const SimilarMoviesList = withRouter(
    SimilarMoviesListContainer
);
