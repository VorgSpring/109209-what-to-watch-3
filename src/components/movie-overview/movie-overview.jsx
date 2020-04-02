import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Rating} from '../../constants/rating';

export class MovieOverview extends PureComponent {
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

MovieOverview.defaultProps = {
  film: null
};

MovieOverview.propTypes = {
  film: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    scoresCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired
  })
};
