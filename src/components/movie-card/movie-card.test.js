import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {MovieCard} from './movie-card.jsx';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import {state} from '../../mocks/state';
import configureStore from 'redux-mock-store';
import {films} from '../../mocks/films';

describe(`MovieCard`, () => {
  it(`should renders correctly`, () => {
    const mockStore = configureStore([]);
    const store = mockStore(state);

    const tree = renderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <MovieCard
              film={films[0]}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
