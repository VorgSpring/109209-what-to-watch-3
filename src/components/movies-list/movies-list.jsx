import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withActiveItem} from '../../hoc/with-active-item/with-active-item';
import {withIncrementalShowItems} from '../../hoc/with-incremental-show-items/with-incremental-show-items';
import {SmallMovieCard} from '../small-movie-card/small-movie-card.jsx';
import {getFiltratedFilmsSelector} from '../../selectors/films/films';
import {loadFilms} from '../../operations/films/films';

export class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // TODO не загружать здесь
    this.props.onLoadFilms();
  }

  render() {
    const {
      films,
      showCount,
      onActiveItem,
      onSetMoreItemsToShow
    } = this.props;


    const filmsToBeShown = films.slice(0, showCount);
    const isShowMore = showCount < films.length;

    return (
      <Fragment>
        <div className="catalog__movies-list">
          {filmsToBeShown.map((film) => (
            <SmallMovieCard
              key={film.name}
              film={film}
              onHoverCard={onActiveItem} />
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
  films: []
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired
      })
  ),
  showCount: PropTypes.number.isRequired,
  onLoadFilms: PropTypes.func.isRequired,
  onActiveItem: PropTypes.func.isRequired,
  onSetMoreItemsToShow: PropTypes.func.isRequired
};

const MoviesListWrapper = withIncrementalShowItems(
    withActiveItem(MoviesList)
);

const mapStateToProps = (state, ownProps) => ({
  films: getFiltratedFilmsSelector(state, ownProps)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFilms: () => dispatch(loadFilms())
});

export const MoviesListContainer = connect(
    mapStateToProps, mapDispatchToProps
)(MoviesListWrapper);
