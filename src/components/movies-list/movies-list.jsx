import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withIncrementalShowItems} from '../../hoc/with-incremental-show-items/with-incremental-show-items';
import {SmallMovieCard} from '../small-movie-card/small-movie-card.jsx';
import {getFiltratedFilmsSelector} from '../../selectors/films/films';
import {loadFilms} from '../../operations/films/films';

export class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {films, onLoadFilms} = this.props;

    if (!films) {
      onLoadFilms();
    }
  }

  render() {
    const {
      films,
      showCount,
      onSetMoreItemsToShow
    } = this.props;

    if (!films) {
      return null;
    }

    const filmsToBeShown = showCount ? films.slice(0, showCount) : films;
    const isShowMore = showCount && showCount < films.length;

    return (
      <Fragment>
        <div className="catalog__movies-list">
          {filmsToBeShown.map((film) => (
            <SmallMovieCard
              key={film.id}
              film={film} />
          ))}
        </div>

        {isShowMore && <div className="catalog__more">
          <button
            className="catalog__button" type="button"
            onClick={onSetMoreItemsToShow}
          >Show more</button>
        </div>}
      </Fragment>
    );
  }
}

MoviesList.defaultProps = {
  films: null,
  showCount: false
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired
      })
  ),
  showCount: PropTypes.number,
  onLoadFilms: PropTypes.func.isRequired,
  onSetMoreItemsToShow: PropTypes.func.isRequired
};

const MoviesListWrapper = withIncrementalShowItems(MoviesList);

const mapStateToProps = (state, ownProps) => ({
  films: getFiltratedFilmsSelector(state, ownProps)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFilms: () => dispatch(loadFilms())
});

export const MoviesListContainer = connect(
    mapStateToProps, mapDispatchToProps
)(MoviesListWrapper);
