import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

export const MovieInfo = ({name, genre, released}) => (
  <Fragment>
    <h2 className='movie-card__title'>{name}</h2>
    <p className='movie-card__meta'>
      <span className='movie-card__genre'>{genre}</span>
      <span className='movie-card__year'>{released}</span>
    </p>
  </Fragment>
);

MovieInfo.defaultProps = {
  name: ``,
  genre: ``,
  released: null
};

MovieInfo.propTypes = {
  name: PropTypes.string,
  genre: PropTypes.string,
  released: PropTypes.number
};
