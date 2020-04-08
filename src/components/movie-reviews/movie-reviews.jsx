import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {MovieReview} from '../movie-review/movie-review.jsx';
import {loadReviews} from '../../operations/reviews/reviews';
import {
  getReviewsLoadedStatusSelector,
  getReviewsByFilmIdSelector
} from '../../selectors/reviews/reviews';
import {
  getFilmIdSelector
} from '../../selectors/films/films';
import {reviewPropTypes} from '../../helpers/types';

// TODO отрисовать пустые комментарии
export class MovieReviewsComponent extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      isLoaded,
      filmId,
      onLoadReviews
    } = this.props;

    if (!isLoaded) {
      onLoadReviews(filmId);
    }
  }

  componentDidUpdate({filmId}) {
    if (this.props.filmId !== filmId) {
      this.props.onLoadReviews(this.props.filmId);
    }
  }

  render() {
    const {
      reviews, isLoaded
    } = this.props;

    if (!isLoaded) {
      return null;
    }

    return (
      <div className='movie-card__reviews movie-card__row'>
        <div className='movie-card__reviews-col'>
          {reviews.even.map((review) => (
            <MovieReview key={review.id} {...review} />
          ))}
        </div>
        <div className='movie-card__reviews-col'>
          {reviews.odd.map((review) => (
            <MovieReview key={review.id} {...review} />
          ))}
        </div>
      </div>
    );
  }
}

MovieReviewsComponent.propTypes = {
  filmId: PropTypes.number.isRequired,
  reviews: PropTypes.shape({
    odd: PropTypes.arrayOf(
        PropTypes.shape(reviewPropTypes)
    ),
    even: PropTypes.arrayOf(
        PropTypes.shape(reviewPropTypes)
    )
  }).isRequired,
  isLoaded: PropTypes.bool.isRequired,
  onLoadReviews: PropTypes.func.isRequired
};

const mapStateToProps = (state, props) => ({
  isLoaded: getReviewsLoadedStatusSelector(state),
  reviews: getReviewsByFilmIdSelector(state, props),
  filmId: getFilmIdSelector(state, props)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadReviews: (id) => dispatch(loadReviews(id))
});

export const MovieReviewsContainer = connect(
    mapStateToProps, mapDispatchToProps
)(MovieReviewsComponent);

export const MovieReviews = withRouter(
    MovieReviewsContainer
);
