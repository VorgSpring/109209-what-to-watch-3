import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Header} from '../header/header.jsx';
import {SingInForm} from '../sign-in-form/sign-in-form.jsx';
import {Footer} from '../footer/footer.jsx';
import {getAuthorizationStatusSelector} from '../../selectors/authorization/authorization';
import {RoutePaths} from '../../constants/route-paths';

export const SingInPageComponent = ({
  isAuthorizationRequired
}) => (
  isAuthorizationRequired ? (
    <div className='user-page'>
      <Header user />

      <div className='sign-in user-page__content'>
        <SingInForm />
      </div>

      <Footer />
    </div>
  ) : (
    <Redirect to={RoutePaths.MAIN} />
  )
);

SingInPageComponent.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isAuthorizationRequired: getAuthorizationStatusSelector(state)
});

export const SingInPage = connect(
    mapStateToProps
)(SingInPageComponent);
