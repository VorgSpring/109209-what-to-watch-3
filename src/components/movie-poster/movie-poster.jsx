import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

export const MoviePoster = ({
  poster,
  name,
  big,
  small,
  children
}) => (
  <Fragment>
    <div
      className={
        `movie-card__poster
        ${big && `movie-card__poster--big`}
        ${small && `movie-card__poster--small`}
      `}
    >
      <img
        src={poster}
        alt={`${name} poster`}
        width='218'
        height='327'
      />
    </div>
    {children && <Fragment>
      {children}
    </Fragment>}
  </Fragment>
);

MoviePoster.defaultProps = {
  poster: ``,
  name: ``,
  big: false,
  small: false,
  children: null
};

MoviePoster.propTypes = {
  poster: PropTypes.string,
  name: PropTypes.string,
  big: PropTypes.bool,
  small: PropTypes.bool,
  children: PropTypes.node
};
