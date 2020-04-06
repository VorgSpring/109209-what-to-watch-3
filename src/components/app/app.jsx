import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import {MainPage} from '../main-page/main-page.jsx';
import {SingInPageContainer} from '../sign-in-page/sign-in-page.jsx';
import {MoviePageContainer} from '../movie-page/movie-page.jsx';
import {MoviePlayerContainer} from '../movie-player/movie-player.jsx';
import {RoutePaths} from '../../constants/route-paths';

export const App = () => (
  <Fragment>
    <Switch>
      <Route
        exact
        path={RoutePaths.MAIN}
        component={MainPage}
      />

      <Route
        exact
        path={RoutePaths.FILM}
        component={MoviePageContainer}
      />

      <Route
        exact
        path={RoutePaths.SING_IN}
        component={SingInPageContainer}
      />
    </Switch>

    <MoviePlayerContainer />
  </Fragment>
);
