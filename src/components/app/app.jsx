import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {MainPage} from '../main-page/main-page.jsx';
import {SingInPage} from '../sign-in-page/sign-in-page.jsx';
import {MoviePage} from '../movie-page/movie-page.jsx';
import {MoviePlayer} from '../movie-player/movie-player.jsx';
import {AddReviewPage} from '../add-review-page/add-review-page.jsx';
import {FavoriteMoviesPage} from '../favorite-movies-page/favorite-movies-page.jsx';
import {RoutePaths} from '../../constants/route-paths';
import {PrivateRoute} from '../private-route/private-route.jsx';
import {
  getFilmsLoadedStatusSelector
} from '../../selectors/films/films';
import {loadFilms} from '../../operations/films/films';
import {
  getAuthorizationData
} from '../../operations/authorization/authorization';
import {
  getAuthorizationStatusSelector
} from '../../selectors/authorization/authorization';


export class App extends PureComponent {
  componentDidMount() {
    const {
      isLoadedFilms,
      onLoadFilms,
      isAuthorizationRequired,
      checkAuth
    } = this.props;

    if (isAuthorizationRequired) {
      checkAuth();
    }

    if (!isLoadedFilms) {
      onLoadFilms();
    }
  }

  render() {
    const {
      isAuthorizationRequired,
      isLoadedFilms
    } = this.props;

    if (!isLoadedFilms) {
      return null;
    }

    return (
      <Fragment>
        <Switch>
          <Route
            exact
            path={RoutePaths.FILM}
            component={MoviePage}
          />

          {isAuthorizationRequired && <Route
            exact
            path={RoutePaths.SING_IN}
            component={SingInPage}
          />}

          <Route
            exact
            path={RoutePaths.PLAYER}
            component={MoviePlayer}
          />

          <PrivateRoute
            exact
            path={RoutePaths.REVIEW}
            render={
              (props) => <AddReviewPage {...props} />
            }
          />

          <PrivateRoute
            exact
            path={RoutePaths.FAVORITE}
            render={
              (props) => <FavoriteMoviesPage {...props} />
            }
          />

          <Route
            path={RoutePaths.MAIN}
            component={MainPage}
          />
        </Switch>
      </Fragment>
    );
  }
}

App.defaultProps = {
  user: null
};

App.propTypes = {
  isLoadedFilms: PropTypes.bool.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  onLoadFilms: PropTypes.func.isRequired,
  checkAuth: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isLoadedFilms: getFilmsLoadedStatusSelector(state),
  isAuthorizationRequired: getAuthorizationStatusSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFilms: () => dispatch(loadFilms()),
  checkAuth: () => dispatch(getAuthorizationData())
});

export const AppContainer = connect(
    mapStateToProps, mapDispatchToProps
)(App);
