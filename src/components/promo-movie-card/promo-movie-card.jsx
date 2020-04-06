import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {MovieWrapper} from '../movie-wrapper/movie-wrapper.jsx';
import {MovieInfo} from '../movie-info/movie-info.jsx';
import {MoviePoster} from '../movie-poster/movie-poster.jsx';
import {MovieButtonsContainer} from '../movie-buttons/movie-buttons.jsx';
import {loadPromoMovie} from '../../operations/promo-movie/promo-movie';
import {getPromoMovieSelector} from '../../selectors/promo-movie/promo-movie';

export class PromoMovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onLoadFilm();
  }

  render() {
    // TODO сделать нормальный прелоад
    const {film} = this.props;

    if (!film) {
      return null;
    }

    const {
      id,
      bgImage,
      name,
      poster,
      genre,
      released,
      isFavorite
    } = film;

    return (
      <section className='movie-card'>
        <MovieWrapper
          name={name}
          bgImage={bgImage}
        >
          <MoviePoster
            name={name}
            poster={poster}
          >
            <div className='movie-card__desc'>
              <MovieInfo
                name={name}
                genre={genre}
                released={released}
              />

              <MovieButtonsContainer
                filmId={id}
                isFavorite={isFavorite}
              />
            </div>
          </MoviePoster>
        </MovieWrapper>


      </section>
    );
  }
}

PromoMovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    bgImage: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired
  }),
  onLoadFilm: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  film: getPromoMovieSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFilm: () => dispatch(loadPromoMovie())
});

export const PromoMovieContainer = connect(
    mapStateToProps, mapDispatchToProps
)(PromoMovieCard);
