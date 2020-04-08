import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer/reducer';
import {createAPI} from './api';
import {authorizationError} from './actions/authorization/authorization';
import {RequestErrors} from './constants/errors';

const api = createAPI(() => {
  store.dispatch(
      authorizationError(RequestErrors.UNAUTHORIZED)
  );
});

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

export default store;
