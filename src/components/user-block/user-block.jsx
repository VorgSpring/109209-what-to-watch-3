import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getUserSelector} from '../../selectors/user/user';
import {RoutePaths} from '../../constants/route-paths';

const BASE_URL = `https://htmlacademy-react-3.appspot.com`;

export const UserBlock = ({user}) => (
  <div className="user-block">
    {user
      ? (
        <Link
          to={RoutePaths.FAVORITE}
          className="user-block__avatar"
        >
          <img
            src={`${BASE_URL}${user.avatarUrl}`}
            alt="User avatar"
            width="63"
            height="63"
          />
        </Link>
      ) : (
        <Link
          to={RoutePaths.SING_IN}
          className="user-block__link">
          Sign in
        </Link>
      )}
  </div>
);

UserBlock.defaultProps = {
  user: null
};

UserBlock.propTypes = {
  user: PropTypes.shape({
    avatarUrl: PropTypes.string
  })
};

const mapStateToProps = (state) => ({
  user: getUserSelector(state)
});

export const UserBlockContainer = connect(
    mapStateToProps
)(UserBlock);
