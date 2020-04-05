import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {MovieReview} from '../movie-review/movie-review.jsx';
import {loadReviews} from '../../operations/reviews/reviews';
import {getReviewsByFilmIdSelector} from '../../selectors/reviews/reviews';

// TODO отрисовать пустые комментарии
export class MovieReviews extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      reviews,
      filmId,
      onLoadReviews
    } = this.props;

    if (!reviews) {
      onLoadReviews(filmId);
    }
  }

  componentDidUpdate({filmId}) {
    if (this.props.filmId !== filmId && !this.props.reviews) {
      this.props.onLoadReviews(this.props.filmId);
    }
  }

  render() {
    const {reviews} = this.props;

    return (
      <div className='movie-card__reviews movie-card__row'>
        <div className='movie-card__reviews-col'>
          {reviews && reviews.map((review) => (
            <MovieReview key={review.id} {...review} />
          ))}
        </div>
      </div>
    );
  }
}

MovieReviews.defaultProps = {
  reviews: null
};

MovieReviews.propTypes = {
  filmId: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        user: PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired
        }).isRequired,
        rating: PropTypes.number.isRequired,
        comment: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
      })
  ),
  onLoadReviews: PropTypes.func.isRequired
};

const mapStateToProps = (state, props) => ({
  reviews: getReviewsByFilmIdSelector(state, props),
  filmId: props.film.id
});

const mapDispatchToProps = (dispatch) => ({
  onLoadReviews: (id) => dispatch(loadReviews(id))
});

export const MovieReviewsContainer = connect(
    mapStateToProps, mapDispatchToProps
)(MovieReviews);
