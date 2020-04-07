import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {getFilmPathLink} from '../../helpers/get-links/get-links';

export const Breadcrumbs = ({id, name}) => (
  <nav className='breadcrumbs'>
    <ul className='breadcrumbs__list'>
      <li className='breadcrumbs__item'>
        <Link
          to={getFilmPathLink(id)}
          className='breadcrumbs__link'
        >
          {name}
        </Link>
      </li>
      <li className='breadcrumbs__item'>
        <a className='breadcrumbs__link'>Add review</a>
      </li>
    </ul>
  </nav>
);

Breadcrumbs.defaultProps = {
  id: null,
  name: ``
};

Breadcrumbs.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string
};
