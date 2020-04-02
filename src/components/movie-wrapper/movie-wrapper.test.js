import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {MovieWrapper} from './movie-wrapper.jsx';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {state} from '../../mocks/state';
import configureStore from 'redux-mock-store';

describe(`MovieWrapper`, () => {
  it(`should renders correctly`, () => {
    const mockStore = configureStore([]);
    const store = mockStore(state);

    const tree = renderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <MovieWrapper />
          </BrowserRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
