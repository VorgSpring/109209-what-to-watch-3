import React from 'react';
import PropTypes from 'prop-types';

export const MoviePoster = ({poster, name, isBig, children}) => (
  <div className='movie-card__info'>
    <div className={`movie-card__poster ${isBig && `movie-card__poster--big`}`}>
      <img
        src={poster}
        alt={`${name} poster`}
        width='218'
        height='327'
      />
    </div>
    {children}
  </div>
);

MoviePoster.defaultProps = {
  poster: ``,
  name: ``,
  isBig: false,
  children: []
};

MoviePoster.propTypes = {
  poster: PropTypes.string,
  name: PropTypes.string,
  isBig: PropTypes.bool,
  children: PropTypes.node
};
