import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {UserBlockContainer} from '../user-block/user-block.jsx';
import {RoutePaths} from '../../constants/route-paths';

export const Header = ({pageTitle, isMovieCard}) => (
  <Fragment>
    <h1 className='visually-hidden'>WTW</h1>

    <header className={`page-header ${isMovieCard ? `movie-card` : `user-page`}__head`}>
      <div className='logo'>
        <Link className='logo__link' to={RoutePaths.MAIN}>
          <span className='logo__letter logo__letter--1'>W</span>
          <span className='logo__letter logo__letter--2'>T</span>
          <span className='logo__letter logo__letter--3'>W</span>
        </Link>
      </div>

      {pageTitle && <h1 className='page-title user-page__title'>
        {pageTitle}
      </h1>}

      {isMovieCard && <UserBlockContainer />}
    </header>
  </Fragment>
);

Header.defaultProps = {
  pageTitle: null,
  isMovieCard: true
};

Header.propTypes = {
  pageTitle: PropTypes.string,
  isMovieCard: PropTypes.bool
};
