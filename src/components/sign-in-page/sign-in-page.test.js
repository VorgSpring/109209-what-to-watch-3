import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {SingInPage} from './sign-in-page.jsx';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import {state} from '../../mocks/state';
import configureStore from 'redux-mock-store';

describe(`SingInPage`, () => {
  it(`should renders correctly`, () => {
    const mockStore = configureStore([]);
    const store = mockStore(state);

    const tree = renderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <SingInPage isAuthorizationRequired={false} />
          </BrowserRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
