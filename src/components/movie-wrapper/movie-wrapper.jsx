import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Header} from '../header/header.jsx';

export const MovieWrapper = ({children, bgImage, name}) => (
  <Fragment>
    <div className='movie-card__bg'>
      <img src={bgImage} alt={name} />
    </div>

    <Header />

    <div className='movie-card__wrap'>
      {children}
    </div>
  </Fragment>
);

MovieWrapper.defaultProps = {
  children: [],
  name: ``,
  bgImage: ``,
  isMovieCard: false
};

MovieWrapper.propTypes = {
  bgImage: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node
};
