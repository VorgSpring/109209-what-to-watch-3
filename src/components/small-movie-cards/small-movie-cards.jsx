import React from 'react';
import PropTypes from 'prop-types';
import {SmallMovieCard} from '../small-movie-card/small-movie-card.jsx';

export const SmallMovieCards = ({films}) => (
  <div className="catalog__movies-list">
    {films.map((film) => (
      <SmallMovieCard
        key={film.id}
        film={film} />
    ))}
  </div>
);

SmallMovieCards.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        previewImage: PropTypes.string.isRequired,
        preview: PropTypes.oneOfType([
          PropTypes.array,
          PropTypes.string
        ]).isRequired,
      })
  ).isRequired
};
