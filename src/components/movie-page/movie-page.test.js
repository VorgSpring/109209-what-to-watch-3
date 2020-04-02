import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {MoviePage} from './movie-page.jsx';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {state} from '../../mocks/state';
import configureStore from 'redux-mock-store';
import {films} from '../../mocks/films';

describe(`MoviePage`, () => {
  it(`should renders correctly`, () => {
    const mockStore = configureStore([]);
    const store = mockStore(state);

    const tree = renderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <MoviePage
              film={films[0]}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
