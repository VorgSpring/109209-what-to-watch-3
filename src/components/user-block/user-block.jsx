import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getUserSelector} from '../../selectors/user/user';
import {getAuthorizationData} from '../../operations/authorization/authorization';
import {RoutePaths} from '../../constants/route-paths';

export class UserBlock extends PureComponent {
  componentDidMount() {
    const {user, getUser} = this.props;

    if (!user) {
      getUser();
    }
  }

  render() {
    const {user} = this.props;

    return (
      <div className="user-block">
        {user ? (
          <Link
            to={RoutePaths.FAVORITE}
            className="user-block__avatar"
          >
            <img
              src={user.avatarUrl}
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
  }
}

UserBlock.defaultProps = {
  user: null
};

UserBlock.propTypes = {
  user: PropTypes.shape({
    avatarUrl: PropTypes.string
  }),
  getUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  user: getUserSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getAuthorizationData())
});

export const UserBlockContainer = connect(
    mapStateToProps, mapDispatchToProps
)(UserBlock);
