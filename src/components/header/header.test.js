import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Header} from './header.jsx';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {state} from '../../mocks/state';
import configureStore from 'redux-mock-store';

describe(`Header`, () => {
  it(`should renders correctly`, () => {
    const mockStore = configureStore([]);
    const store = mockStore(state);

    const tree = renderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
