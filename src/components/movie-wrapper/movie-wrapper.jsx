import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Header} from '../header/header.jsx';

export const MovieWrapper = ({children, bgImage, name, movieType, renderNav}) => (
  <Fragment>
    <div className='movie-card__bg'>
      <img src={bgImage} alt={name} />
    </div>

    <Header movieType={movieType} showUserBlok>
      {renderNav()}
    </Header>

    {children && <div className='movie-card__wrap'>
      {children}
    </div>}
  </Fragment>
);

MovieWrapper.defaultProps = {
  children: null,
  name: ``,
  bgImage: ``,
  movieType: false,
  renderNav: () => null
};

MovieWrapper.propTypes = {
  bgImage: PropTypes.string,
  name: PropTypes.string,
  movieType: PropTypes.bool,
  children: PropTypes.node,
  renderNav: PropTypes.func
};
