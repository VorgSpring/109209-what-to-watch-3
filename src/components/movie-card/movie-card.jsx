import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {MovieWrapper} from '../movie-wrapper/movie-wrapper.jsx';
import {MovieInfo} from '../movie-info/movie-info.jsx';
import {MoviePoster} from '../movie-poster/movie-poster.jsx';
import {MovieButtons} from '../movie-buttons/movie-buttons.jsx';
import {MovieTabs} from '../movie-tabs/movie-tabs.jsx';
import {getFilmByIdSelector} from '../../selectors/films/films';

export const MovieCardComponent = ({film}) => {
  const {
    id,
    bgImage,
    bgColor,
    name,
    poster,
    genre,
    released,
    isFavorite
  } = film;

  return (
    <section
      className='movie-card movie-card--full'
      style={{backgroundColor: bgColor}}
    >
      <div className='movie-card__hero'>
        <MovieWrapper
          name={name}
          bgImage={bgImage}
          movieType
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
              isFull
            />
          </div>
        </MovieWrapper >
      </div>

      <div className='movie-card__wrap movie-card__translate-top'>
        <div className='movie-card__info'>
          <MoviePoster
            name={name}
            poster={poster}
            isBig
          >
            <MovieTabs />
          </MoviePoster>
        </div>
      </div>
    </section>
  );
};

MovieCardComponent.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    bgImage: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired
  }).isRequired
};

const mapStateToProps = (state, ownProps) => ({
  film: getFilmByIdSelector(state, ownProps)
});

export const MovieCardContainer = connect(
    mapStateToProps
)(MovieCardComponent);


export const MovieCard = withRouter(MovieCardContainer);
