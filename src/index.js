import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import store from './store';
import {AppContainer} from './components/app/app.jsx';
import history from './history';

const init = () => {
  const root = document.querySelector(`#root`);
  ReactDOM.render(
      <Provider store={store}>
        <Router history={history}>
          <AppContainer />
        </Router >
      </Provider>, root
  );
};

init();
