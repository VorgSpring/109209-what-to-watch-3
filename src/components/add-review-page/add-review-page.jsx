import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {MovieWrapper} from '../movie-wrapper/movie-wrapper.jsx';
import {MoviePoster} from '../movie-poster/movie-poster.jsx';
import {Breadcrumbs} from '../breadcrumbs/breadcrumbs.jsx';
import {ReviewForm} from '../review-form/review-form.jsx';
import {getFilmByIdSelector} from '../../selectors/films/films';

export const AddReviewPageComponent = ({film}) => {
  const {
    id,
    bgImage,
    bgColor,
    name,
    poster
  } = film;

  return (
    <section
      className='movie-card movie-card--full'
      style={{backgroundColor: bgColor}}
    >
      <div className='movie-card__header'>
        <MovieWrapper
          name={name}
          bgImage={bgImage}
          renderNav={
            () => <Breadcrumbs id={id} name={name} />
          }
        />

        <MoviePoster
          name={name}
          poster={poster}
          small
        />
      </div>

      <ReviewForm filmId={id} />
    </section>
  );
};

AddReviewPageComponent.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    bgImage: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
  }).isRequired
};

const mapStateToProps = (state, props) => ({
  film: getFilmByIdSelector(state, props)
});

export const AddReviewPage = connect(
    mapStateToProps
)(AddReviewPageComponent);
