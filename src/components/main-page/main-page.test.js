import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {MainPage} from './main-page.jsx';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import {state} from '../../mocks/state';
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import {createAPI} from '../../api';
import MockAdapter from 'axios-mock-adapter';
import {ApiPaths} from '../../constants/api';
import {filmByServer} from '../../mocks/films';

describe(`MainPage`, () => {
  it(`should renders correctly`, () => {
    const api = createAPI();
    const apiMock = new MockAdapter(api);
    apiMock
      .onGet(ApiPaths.PROMO_MOVIE)
      .reply(200, filmByServer);

    apiMock
      .onGet(ApiPaths.FILMS)
      .reply(200, []);

    const mockStore = configureStore([thunk.withExtraArgument(api)]);
    const store = mockStore(state);

    const tree = renderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <MainPage />
          </BrowserRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
