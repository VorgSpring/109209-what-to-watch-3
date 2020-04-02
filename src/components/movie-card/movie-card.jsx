import React from 'react';
import PropTypes from 'prop-types';
import {MovieWrapper} from '../movie-wrapper/movie-wrapper.jsx';
import {MovieInfo} from '../movie-info/movie-info.jsx';
import {MoviePoster} from '../movie-poster/movie-poster.jsx';
import {MovieButtonsContainer} from '../movie-buttons/movie-buttons.jsx';
import {MovieTabsWrapper} from '../movie-tabs/movie-tabs.jsx';

export const MovieCard = ({film}) => {
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
              isFull
            />
          </div>
        </MovieWrapper >
      </div>

      <div className='movie-card__wrap movie-card__translate-top'>
        <MoviePoster
          name={name}
          poster={poster}
          isBig
        >
          <MovieTabsWrapper film={film} />
        </MoviePoster>
      </div>
    </section>
  );
};

MovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    bgImage: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired
  })
};
