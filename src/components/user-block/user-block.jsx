import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getUserSelector} from '../../selectors/user/user';
import {RoutePaths} from '../../constants/route-paths';

export const UserBlock = ({user}) => (
  <div className="user-block">
    {user ? (
      <div className="user-block__avatar">
        <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
      </div>
    ) : (
      <Link to={RoutePaths.SING_IN} className="user-block__link">Sign in</Link>
    )}
  </div>
);

UserBlock.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string
  })
};

const mapStateToProps = (state) => ({
  user: getUserSelector(state)
});

export const UserBlockContainer = connect(mapStateToProps)(UserBlock);
