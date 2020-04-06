import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import store from './store';
import {MainPage} from './components/main-page/main-page.jsx';
import {SingInPageContainer} from './components/sign-in-page/sign-in-page.jsx';
import {MoviePageContainer} from './components/movie-page/movie-page.jsx';
import {MoviePlayerContainer} from './components/movie-player/movie-player.jsx';
import {RoutePaths} from './constants/route-paths';

export const App = () => (
  <Provider store={store}>
    <BrowserRouter>
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
    </BrowserRouter>
  </Provider>
);
