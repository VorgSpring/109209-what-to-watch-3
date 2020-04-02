import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer/reducer';
import {createAPI} from './api';
import history from './history';
import {authorizationError} from './actions/authorization/authorization';
import {RequestErrors} from './constants/errors';
import {RoutePaths} from './constants/route-paths';

const api = createAPI(() => {
  store.dispatch(
      authorizationError(RequestErrors.UNAUTHORIZED)
  );
  history.push(RoutePaths.SING_IN);
});

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

export default store;
