import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Header} from '../header/header.jsx';
import {SingInFormContainer} from '../sign-in-form/sign-in-form.jsx';
import {Footer} from '../footer/footer.jsx';
import {isAuthorizationSelector} from '../../selectors/authorization/authorization';
import {RoutePaths} from '../../constants/route-paths';

export const SingInPage = ({isAuthorizationRequired}) => (
  isAuthorizationRequired ? (
    <div className='user-page'>
      <Header user />

      <div className='sign-in user-page__content'>
        <SingInFormContainer />
      </div>

      <Footer />
    </div>
  ) : (
    <Redirect to={RoutePaths.MAIN} />
  )
);

SingInPage.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isAuthorizationRequired: isAuthorizationSelector(state)
});

export const SingInPageContainer = connect(mapStateToProps)(SingInPage);
