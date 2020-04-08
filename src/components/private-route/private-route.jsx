import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {RoutePaths} from '../../constants/route-paths';
import {
  getAuthorizationStatusSelector
} from '../../selectors/authorization/authorization';

export const PrivateRouteComponent = ({
  render,
  path,
  exact,
  isAuthorizationRequired
}) => (
  <Route
    path={path}
    exact={exact}
    render={(props) => (
      isAuthorizationRequired
        ? <Redirect to={RoutePaths.SING_IN}/>
        : render(props)
    )}
  />
);

PrivateRouteComponent.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapToProps = (state) => ({
  isAuthorizationRequired: getAuthorizationStatusSelector(state),
});

export const PrivateRoute = connect(
    mapToProps
)(PrivateRouteComponent);
