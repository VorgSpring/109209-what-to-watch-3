import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {Rating} from '../../constants/rating';
import {
  getFilmByIdSelector
} from '../../selectors/films/films';
import {filmPropTypes} from '../../helpers/types';

export class MovieOverviewComponent extends PureComponent {
  constructor(props) {
    super(props);
  }

  get ratingLevel() {
    const {rating} = this.props.film;

    return Object.keys(Rating).find((item) => (
      rating >= Rating[item].MIN && rating < Rating[item].MAX)
    );
  }

  get starsInMovie() {
    const {starring} = this.props.film;

    return starring.reduce((ac, item) => (
      ac += `, ${item}`
    ));
  }

  render() {
    const {
      rating,
      director,
      scoresCount,
      description
    } = this.props.film;

    return (
      <Fragment>
        <div className='movie-rating'>
          <div className='movie-rating__score'>{rating}</div>
          <p className='movie-rating__meta'>
            <span className='movie-rating__level'>{this.ratingLevel}</span>
            <span className='movie-rating__count'>{scoresCount} ratings</span>
          </p>
        </div>

        <div className='movie-card__text'>
          <p>{description}</p>

          <p className='movie-card__director'>
            <strong>{director}</strong>
          </p>

          <p className='movie-card__starring'>
            <strong>{this.starsInMovie}</strong>
          </p>
        </div>
      </Fragment>
    );
  }
}

MovieOverviewComponent.propTypes = {
  film: PropTypes.shape(filmPropTypes)
};

const mapStateToProps = (state, props) => ({
  film: getFilmByIdSelector(state, props)
});

export const MovieOverviewContainer = connect(
    mapStateToProps
)(MovieOverviewComponent);

export const MovieOverview = withRouter(
    MovieOverviewContainer
);
