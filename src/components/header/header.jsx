import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {UserBlockContainer} from '../user-block/user-block.jsx';
import {RoutePaths} from '../../constants/route-paths';

export const Header = ({title, movieType, userType, showUserBlok, children}) => (
  <Fragment>
    <h1 className='visually-hidden'>WTW</h1>

    <header
      className={
        `page-header
        ${movieType && `movie-card__head`}
        ${userType && `user-page__head`}`
      }
    >
      <div className='logo'>
        <Link className='logo__link' to={RoutePaths.MAIN}>
          <span className='logo__letter logo__letter--1'>W</span>
          <span className='logo__letter logo__letter--2'>T</span>
          <span className='logo__letter logo__letter--3'>W</span>
        </Link>
      </div>

      {title && <h1 className='page-title user-page__title'>
        {title}
      </h1>}

      {children && <Fragment>
        {children}
      </Fragment>}

      {showUserBlok && <UserBlockContainer />}
    </header>
  </Fragment>
);

Header.defaultProps = {
  title: null,
  movieType: false,
  userType: false,
  showUserBlok: false,
  children: null
};

Header.propTypes = {
  title: PropTypes.string,
  movieType: PropTypes.bool,
  userType: PropTypes.bool,
  showUserBlok: PropTypes.bool,
  children: PropTypes.node
};
