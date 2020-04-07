import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {MovieWrapper} from '../movie-wrapper/movie-wrapper.jsx';
import {MoviePoster} from '../movie-poster/movie-poster.jsx';
import {Breadcrumbs} from '../breadcrumbs/breadcrumbs.jsx';
import {ReviewFormContainer} from '../review-form/review-form.jsx';
import {getFilmByIdSelector} from '../../selectors/films/films';
import {loadFilms} from '../../operations/films/films';

export class AddReviewPage extends PureComponent {
  componentDidMount() {
    const {film, onLoadFilms} = this.props;

    if (!film) {
      onLoadFilms();
    }
  }

  render() {
    const {film} = this.props;

    if (!film) {
      return null;
    }

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

        <ReviewFormContainer filmId={id} />
      </section>
    );
  }
}

AddReviewPage.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    bgImage: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
  }),
  onLoadFilms: PropTypes.func
};

const mapStateToProps = (state, props) => ({
  film: getFilmByIdSelector(state, props)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFilms: () => dispatch(loadFilms())
});

export const AddReviewPageContainer = connect(
    mapStateToProps, mapDispatchToProps
)(AddReviewPage);
