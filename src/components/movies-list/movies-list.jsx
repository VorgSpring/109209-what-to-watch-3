import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  withIncrementalShowItems
} from '../../hoc/with-incremental-show-items/with-incremental-show-items';
import {SmallMovieCards} from '../small-movie-cards/small-movie-cards.jsx';
import {
  getFiltratedFilmsSelector
} from '../../selectors/films/films';
import {filmPropTypes} from '../../helpers/types';

export const MoviesListComponent = ({
  filmToShown,
  isHaveMoreItems,
  onSetMoreItemsToShow
}) => (
  <Fragment>
    <SmallMovieCards films={filmToShown} />

    {isHaveMoreItems && <div className="catalog__more">
      <button
        className="catalog__button" type="button"
        onClick={onSetMoreItemsToShow}
      >
        Show more
      </button>
    </div>}
  </Fragment>
);

MoviesListComponent.propTypes = {
  filmToShown: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes)
  ).isRequired,
  isHaveMoreItems: PropTypes.bool.isRequired,
  onSetMoreItemsToShow: PropTypes.func.isRequired
};

const MoviesListContainer = withIncrementalShowItems(
    MoviesListComponent
);

const mapStateToProps = (state, ownProps) => ({
  films: getFiltratedFilmsSelector(state, ownProps)
});

export const MoviesList = connect(
    mapStateToProps
)(MoviesListContainer);
