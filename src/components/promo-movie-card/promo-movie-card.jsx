import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {MovieWrapper} from '../movie-wrapper/movie-wrapper.jsx';
import {MovieInfo} from '../movie-info/movie-info.jsx';
import {MoviePoster} from '../movie-poster/movie-poster.jsx';
import {MovieButtons} from '../movie-buttons/movie-buttons.jsx';
import {loadPromoMovie} from '../../operations/promo-movie/promo-movie';
import {getPromoMovieSelector} from '../../selectors/promo-movie/promo-movie';
import {filmPropTypes} from '../../helpers/types';

export class PromoMovieCardComponent extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {film, onLoadFilm} = this.props;

    if (!film) {
      onLoadFilm();
    }
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
          <div className='movie-card__info'>
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

                <MovieButtons
                  filmId={id}
                  isFavorite={isFavorite}
                />
              </div>
            </MoviePoster>
          </div>
        </MovieWrapper>
      </section>
    );
  }
}

PromoMovieCardComponent.defaultProps = {
  film: null
};

PromoMovieCardComponent.propTypes = {
  film: PropTypes.shape(filmPropTypes),
  onLoadFilm: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  film: getPromoMovieSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFilm: () => dispatch(loadPromoMovie())
});

export const PromoMovieCard = connect(
    mapStateToProps, mapDispatchToProps
)(PromoMovieCardComponent);
