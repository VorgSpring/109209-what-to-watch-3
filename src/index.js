import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import store from './store';
import {MainPage} from './components/main-page/main-page.jsx';
import {SingInPageContainer} from './components/sign-in-page/sign-in-page.jsx';
import {MoviePageContainer} from './components/movie-page/movie-page.jsx';
import {RoutePaths} from './constants/route-paths';

const init = () => {
  const root = document.querySelector(`#root`);
  ReactDOM.render(
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
        </BrowserRouter>
      </Provider>, root
  );
};

init();
