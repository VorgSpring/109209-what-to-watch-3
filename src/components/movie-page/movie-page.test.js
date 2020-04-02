import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {MoviePage} from './movie-page.jsx';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import {createAPI} from '../../api';
import MockAdapter from 'axios-mock-adapter';
import {state} from '../../mocks/state';
import {ApiPaths} from '../../constants/api';
import configureStore from 'redux-mock-store';
import {films} from '../../mocks/films';

describe(`MoviePage`, () => {
  it(`should renders correctly`, () => {
    const api = createAPI();
    const apiMock = new MockAdapter(api);
    apiMock
      .onGet(ApiPaths.FILMS)
      .reply(200, []);
    const mockStore = configureStore([thunk.withExtraArgument(api)]);
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
