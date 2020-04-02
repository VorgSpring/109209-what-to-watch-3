import React from 'react';
import {MovieTabs} from './movie-tabs.jsx';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {state} from '../../mocks/state';
import configureStore from 'redux-mock-store';
import {MovieTabItems} from '../../constants/movie-tab';
import {films} from '../../mocks/films';

describe(`MovieTabs`, () => {
  it(`should renders correctly`, () => {
    const mockStore = configureStore([]);
    const store = mockStore(state);

    const tree = renderer.create(
        <Provider store={store}>
          <MovieTabs
            activeItem={MovieTabItems.DETAILS}
            onActiveItem={()=>{}}
            film={films[0]}
          />
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
