import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withActiveItem} from '../../hoc/with-active-item/with-active-item';
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
    const {films, onActiveItem} = this.props;

    return (
      <Fragment>
        <div className="catalog__movies-list">
          {films.map((film) => (
            <SmallMovieCard
              key={film.name}
              film={film}
              onHoverCard={onActiveItem} />
          ))}
        </div>

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
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
  onLoadFilms: PropTypes.func,
  onActiveItem: PropTypes.func
};

const MoviesListWrapper = withActiveItem(MoviesList);

const mapStateToProps = (state, ownProps) => ({
  films: getFiltratedFilmsSelector(state, ownProps)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFilms: () => dispatch(loadFilms())
});

export const MoviesListContainer = connect(
    mapStateToProps, mapDispatchToProps
)(MoviesListWrapper);
